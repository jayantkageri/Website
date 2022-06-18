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
import nodemailer from 'nodemailer'

async function telegram(id, name, email, ip, message) {
    // Message to be sent to the telegram
    const msg = `#CONTACT_REQUEST
    Refrence Number: ${id}
    Name: ${name}
    eMail: ${email}
    IP: ${ip}
    Message:\n${message}
    `
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
        body: JSON.stringify({
            chat_id: process.env.CHAT_ID,
            text: msg,
            disable_web_page_preview: true,
        })
    })

    // Await the response of Telegram
    const response = await request.json()

    // Returning the response to the client
    return response.ok
}

async function mail(id, name, email, ip, message) {
    return new Promise((resolve, reject) => {
        // Details of the mail
        const subject = `[JAYANTKAGERI.IN] Contact Request (${id})`
        const txt = `
New Contact Request
You have received a new contact request from ${name}

* Details
    Refrence Number: ${id}
    Name: ${name}
    e-Mail ID: ${email}
    IP Address: ${ip}
    Message:
    ${message}
`

        const html = `
<h1>New Contact Request</h1>
<h2>You have received a new contact request from ${name}</h2>
<h2><strong>Details</strong></h2>

<ul>
	<li>Refrence Number: <code>${id}</code></li>
	<li>Name: <code>${name}</code></li>
	<li>e-Mail ID: <a href=${`mailto:${email}`}>${email}</a></li>
	<li>IP Address: <a href=${`https://ipinfo.io/${ip}`}><code>${ip}</code></a></li>
	<li>Message: <p><code>${message}</code></p>
	</li>
</ul>
    `

        // Creating the transporter
        const transporter = nodemailer.createTransport({
            // SMTP Details
            host: process.env.EMAIL_SMTP,
            pool: true,
            port: process.env.EMAIL_PORT || 465,
            secure: process.env.EMAIL_SECURE || false,
            auth: {
                // User Credentials
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASSWORD,
            },
            sender: `Jayant Hegde Kageri <${process.env.EMAIL_ID}>`
        })

        // Verifying the transported is connected to the server
        transporter.verify(function (error) {
            // Check if the error is a connection error
            if (error) {
                // Reject the promise
                reject(error)
            }
        });

        // Sending the mail
        transporter.sendMail({
            from: `Jayant Hegde Kageri <${process.env.EMAIL_ID}>`,
            to: process.env.EMAIL_SEND_TO,
            replyTo: email,
            subject: subject,
            text: txt,
            html: html
        }, (error, info) => {
            if (error) reject(error)
            resolve(info.response.includes("accepted"))
        })
    })
}


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
        const id = Math.floor(Math.random() * 100000000)

        // Verifying the captcha if exists
        if (process.env.HCAPTCHA_SECRET) {
            const data = await verify(process.env.HCAPTCHA_SECRET, token)
            if (!data.success) {
                // If not captcha verified, return error
                return res.status(400).send({ success: false, message: data['error-codes'] })
            }
        }

        let response

        if (process.env.BOT_TOKEN) {
            // Sending the message to the Telegram
            response = await telegram(id, name, email, ip, message)
        }
        if (process.env.EMAIL_ID) {
            // Sending the message to email id
            response = await mail(id, name, email, ip, message)
        }

        // Sending the response to the client
        return res.status(201).send({ success: true, sent: response })
    } catch (err) {
        // If any error occurs, sending the error to the client
        return res.status(500).send({ success: false, message: err.message })
    }
}

export default contact