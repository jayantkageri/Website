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
    try {
        if (req.method.toString().toUpperCase() !== "POST") {
            return res.status(405).send("Method not Allowed")
        }

        const ip = requestIp.getClientIp(req)

        if (!req.body.name || !req.body.email || !req.body.message || process.env.HCAPTCHA_SECRET && !req.body.token) {
            return res.status(400).send({ success: false, message: "Bad Request" })
        }

        const eMailRegex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const { name, email, message, token } = req.body

        if (!email.toString().toLowerCase().match(eMailRegex)) {
            return res.status(400).send({ success: false, message: "Bad Request" })
        }

        if (process.env.HCAPTCHA_SECRET) {
            const data = await verify(process.env.HCAPTCHA_SECRET, token)
            if (!data.success) {
                return res.status(400).send({ success: false, message: data['error-codes'] })
            }
        }

        const msg = `#CONTACT_REQUEST
    Name: ${name}
    eMail: ${email}
    IP: ${ip}
    Message:\n${message}
    `

        let bodyContent = JSON.stringify({
            chat_id: process.env.CHAT_ID,
            text: msg,
            disable_web_page_preview: true,
        });

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
        const response = await request.json()

        return res.status(201).send({ success: true, sent: response.ok })
    } catch (err) {
        return res.status(500).send({ success: false, message: err.message })
    }
}

export default contact