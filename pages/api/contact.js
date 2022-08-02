// Website of jayantkageri, NextJS Site for jayantkageri.in
// Copyright (C) 2021 - 2022 Jayant Hegde Kageri <https://github.com/jayantkageri>

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
import { createTransport } from 'nodemailer'
import dns from "dns"

async function emailValidation(email) {
    return new Promise((resolve) => {
        // Regex Expression to check if the email is valid
        const eMailRegex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        // Check if the email is valid
        if (!eMailRegex.test(email)) return resolve(false);

        // Verify that the email domain is valid
        dns.resolveMx(email.toString().split("@")[1], (err, res) => {
            if (!err && res.length >= 1) return resolve(res.length <= 1 ? Boolean(res[0].exchange) : true);
            return resolve(false);
        })
    })
}

async function telegram(id, name, email, ip, message) {
    if (!process.env.BOT_TOKEN) return false
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
        if (!process.env.EMAIL_ID || !process.env.EMAIL_PASSWORD || !process.env.EMAIL_SMTP) return resolve(false)

        // Details of the mail
        const subject = `[JAYANTKAGERI.IN] Contact Request (${id})`
        const txt = `
New Contact Request
You have received a new contact request from ${name}

* Details
    - Refrence Number: ${id}
    - Name: ${name}
    - e-Mail ID: ${email}
    - IP Address: ${ip}
    - Message:
    ${message}
`

        const html = `
<h1>New Contact Request</h1>

<h1 style="text-align:justify"><span style="font-size:18px">
    You have received a new contact request from ${name}
</span></h1>

<h2 style="margin-left:40px"><span style="font-size:20px"><strong>
    Details
</strong></span></h2>

    <ul style="margin-left:40px">
        <li><span style="font-size:14px">
            Reference Number: <code>${id}
        </code></span></li>
        
        <li><span style="font-size:14px">
            Name: <code>${name}</code>
        </span></li>
        
        <li><span style="font-size:14px">
            e-Mail ID: <a href="${`mailto:${email}`}">${email}</a>
        </span></li>
        
        <li><span style="font-size:14px">
            IP Address: <a href="${`https://ipinfo.io/${ip}`}"><code>${ip}</code></a>
        </span></li>
        
        <li>
            <span style="font-size:14px">Message:</span>
            <p><span style="font-size:14px">
                <code>${message}</code>
            </span></p>
        </li>
    </ul>

    `

        // Creating the transporter
        const transporter = createTransport({
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

        // Validations
        if (
            !req.body.name ||
            !req.body.email ||
            !await emailValidation(req.body.email) ||
            !req.body.message ||
            process.env.HCAPTCHA_SECRET && !req.body.token
        ) {
            return res.status(400).send({ success: false, message: "Bad Request" })
        }

        // Verifying the captcha if exists
        if (process.env.HCAPTCHA_SECRET) {
            const data = await verify(process.env.HCAPTCHA_SECRET, req.body.token)
            if (!data.success) {
                // If not captcha verified, return error
                return res.status(400).send({ success: false, message: data['error-codes'] })
            }
        }

        // Getting the Client IP
        const ip = requestIp.getClientIp(req)

        // Destructuring the request body
        const { name, email, message } = req.body
        const id = Math.floor(Math.random() * 100000000)


        let response = {}

        if (process.env.BOT_TOKEN) {
            // Sending the message to the Telegram
            response = { ...response, telegram: await telegram(id, name, email, ip, message) }
        }
        if (process.env.EMAIL_ID) {
            // Sending the message to Email ID
            response = { ...response, email: await mail(id, name, email, ip, message) }
        }

        // Sending the response to the client
        return res.status(201).send({ success: true, type: response, sent: response.email || response.telegram })
    } catch (err) {
        // If any error occurs, sending the error to the client
        return res.status(500).send({ success: false, message: err.message })
    }
}

export default contact