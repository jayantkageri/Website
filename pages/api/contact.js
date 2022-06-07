// Website of jayantkageri, NextJS Site for jayantkageri.in
// Copyright (C) 2021 - 2022  Jayant Hegde Kageri

// This file is part of Website of jayantkageri.

// Website of jayantkageri is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Website of jayantkageri is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with Website of jayantkageri.  If not, see <https://www.gnu.org/licenses/>.

import requestIp from 'request-ip'
import { verify } from 'hcaptcha'

async function contact(req, res) {
    // Try the contact function
    try {
        if (req.method.toString().toUpperCase() !== "POST") {
            return res.status(405).send("Method not Allowed")
        }

        // Regex Expression to check if the email is valid
        const eMailRegex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // Validations
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.email.toString().toLowerCase().match(eMailRegex) ||
            !req.body.message ||
            process.env.HCAPTCHA_SECRET && !req.body.token
        ) {
            return res.status(400).send({ success: false, message: "Bad Request" })
        }

        // Getting the Client IP
        const ip = requestIp.getClientIp(req)

        // Destructuring the request body
        const { name, email, message, token } = req.body

        // Verifying the captcha if exists
        if (process.env.HCAPTCHA_SECRET) {
            const data = await verify(process.env.HCAPTCHA_SECRET, token)
            if (!data.success) {
                // If not captcha verified, return error
                return res.status(400).send({ success: false, message: data['error-codes'] })
            }
        }

        // Message to be sent to the telegram
        const msg = `#CONTACT_REQUEST
    Name: ${name}
    eMail: ${email}
    IP: ${ip}
    Message:\n${message}
    `

        // Body for Sending the message to the telegram
        let bodyContent = JSON.stringify({
            chat_id: process.env.CHAT_ID,
            text: msg,
            disable_web_page_preview: true,
        });

        // Sending the message to the telegram
        const request = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*/*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json"
            },
            redirect: "follow",
            body: bodyContent
        })

        // Await the response of Telegram
        const response = await request.json()

        // Sending the response to the client
        return res.status(201).send({ success: true, sent: response.ok })
    } catch (err) {
        // If any error occurs, sending the error to the client
        return res.status(500).send({ success: false, message: err.message })
    }
}

export default contact