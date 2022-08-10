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

import { NextApiRequest, NextApiResponse } from 'next'
import requestIp from 'request-ip'
import { verify } from 'hcaptcha'
import { createTransport } from 'nodemailer'
import dns from "dns"

async function emailValidation(email: string): Promise<boolean> {
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

async function telegram(id: number, name: string, email: string, ip: string | null, message: string): Promise<boolean> {
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

async function mail(id: number, name: string, email: string, ip: string | null, message: string): Promise<boolean> {
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
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Jayant Hegde Kageri</title>
    <!--[if (mso 16)]><style type="text/css"> a {text-decoration: none;} </style><![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
    <style type="text/css">
        .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
        }

        .rollover:hover .rollover-second {
            max-height: none !important;
            display: block !important;
        }

        #outlook a {
            padding: 0;
        }

        .es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        .es-button-border:hover {
            border-style: solid solid solid solid !important;
            background: #0b317e !important;
            border-color: #42d159 #42d159 #42d159 #42d159 !important;
        }

        .es-button-border:hover a.es-button,
        .es-button-border:hover button.es-button {
            background: #0b317e !important;
            border-color: #0b317e !important;
        }

        [data-ogsb] .es-button {
            border-width: 0 !important;
            padding: 10px 20px 10px 20px !important;
        }

        @media only screen and (max-width:600px) {

            p,
            ul li,
            ol li,
            a {
                line-height: 150% !important
            }

            h1,
            h2,
            h3,
            h1 a,
            h2 a,
            h3 a {
                line-height: 120% !important
            }

            h1 {
                font-size: 30px !important;
                text-align: center
            }

            h2 {
                font-size: 26px !important;
                text-align: center
            }

            h3 {
                font-size: 20px !important;
                text-align: center
            }

            .st-br {
                padding-left: 10px !important;
                padding-right: 10px !important
            }

            h1 a {
                text-align: center
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px !important
            }

            h2 a {
                text-align: center
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 26px !important
            }

            h3 a {
                text-align: center
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important
            }

            .es-menu td a {
                font-size: 14px !important
            }

            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li,
            .es-header-body a {
                font-size: 16px !important
            }

            .es-content-body p,
            .es-content-body ul li,
            .es-content-body ol li,
            .es-content-body a {
                font-size: 16px !important
            }

            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li,
            .es-footer-body a {
                font-size: 14px !important
            }

            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li,
            .es-infoblock a {
                font-size: 12px !important
            }

            *[class="gmail-fix"] {
                display: none !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3 {
                text-align: right !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-button-border {
                display: block !important
            }

            a.es-button,
            button.es-button {
                font-size: 16px !important;
                display: block !important;
                border-left-width: 0px !important;
                border-right-width: 0px !important
            }

            .es-adaptive table,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important
            }

            .es-adapt-td {
                display: block !important;
                width: 100% !important
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important
            }

            .es-m-p0 {
                padding: 0 !important
            }

            .es-m-p0r {
                padding-right: 0 !important
            }

            .es-m-p0l {
                padding-left: 0 !important
            }

            .es-m-p0t {
                padding-top: 0 !important
            }

            .es-m-p0b {
                padding-bottom: 0 !important
            }

            .es-m-p20b {
                padding-bottom: 20px !important
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            tr.es-desk-hidden,
            td.es-desk-hidden,
            table.es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            table.es-social {
                display: inline-block !important
            }

            table.es-social td {
                display: inline-block !important
            }

            .es-m-p5 {
                padding: 5px !important
            }

            .es-m-p5t {
                padding-top: 5px !important
            }

            .es-m-p5b {
                padding-bottom: 5px !important
            }

            .es-m-p5r {
                padding-right: 5px !important
            }

            .es-m-p5l {
                padding-left: 5px !important
            }

            .es-m-p10 {
                padding: 10px !important
            }

            .es-m-p10t {
                padding-top: 10px !important
            }

            .es-m-p10b {
                padding-bottom: 10px !important
            }

            .es-m-p10r {
                padding-right: 10px !important
            }

            .es-m-p10l {
                padding-left: 10px !important
            }

            .es-m-p15 {
                padding: 15px !important
            }

            .es-m-p15t {
                padding-top: 15px !important
            }

            .es-m-p15b {
                padding-bottom: 15px !important
            }

            .es-m-p15r {
                padding-right: 15px !important
            }

            .es-m-p15l {
                padding-left: 15px !important
            }

            .es-m-p20 {
                padding: 20px !important
            }

            .es-m-p20t {
                padding-top: 20px !important
            }

            .es-m-p20r {
                padding-right: 20px !important
            }

            .es-m-p20l {
                padding-left: 20px !important
            }

            .es-m-p25 {
                padding: 25px !important
            }

            .es-m-p25t {
                padding-top: 25px !important
            }

            .es-m-p25b {
                padding-bottom: 25px !important
            }

            .es-m-p25r {
                padding-right: 25px !important
            }

            .es-m-p25l {
                padding-left: 25px !important
            }

            .es-m-p30 {
                padding: 30px !important
            }

            .es-m-p30t {
                padding-top: 30px !important
            }

            .es-m-p30b {
                padding-bottom: 30px !important
            }

            .es-m-p30r {
                padding-right: 30px !important
            }

            .es-m-p30l {
                padding-left: 30px !important
            }

            .es-m-p35 {
                padding: 35px !important
            }

            .es-m-p35t {
                padding-top: 35px !important
            }

            .es-m-p35b {
                padding-bottom: 35px !important
            }

            .es-m-p35r {
                padding-right: 35px !important
            }

            .es-m-p35l {
                padding-left: 35px !important
            }

            .es-m-p40 {
                padding: 40px !important
            }

            .es-m-p40t {
                padding-top: 40px !important
            }

            .es-m-p40b {
                padding-bottom: 40px !important
            }

            .es-m-p40r {
                padding-right: 40px !important
            }

            .es-m-p40l {
                padding-left: 40px !important
            }

            .es-desk-hidden {
                display: table-row !important;
                width: auto !important;
                overflow: visible !important;
                max-height: inherit !important
            }
        }
    </style>
</head>

<body data-new-gr-c-s-loaded="14.1072.0"
    style="width:100%;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#F8F9FD">
        <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#f8f9fd"></v:fill> </v:background><![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
            <tr>
                <td valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" class="es-header" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-top:10px;padding-bottom:15px;padding-left:30px;padding-right:30px">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:540px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><a
                                                                        target="_blank" href="https://jayantkageri.in"
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#1376C8;font-size:14px"><img
                                                                            src="https://vvefmw.stripocdn.email/content/guids/videoImgGuid/images/jayantkagerie6b8fc52.png"
                                                                            alt="Jayant Hegde Kageri"
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="130" title="Jayant Hegde Kageri"
                                                                            class="adapt-img"></a></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr>
                            <td align="center" bgcolor="#f8f9fd" style="padding:0;Margin:0;background-color:#f8f9fd">
                                <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-bottom:10px">
                                                                    <h1
                                                                        style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#212121">
                                                                        You have a new CONTACT REQUEST</h1>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:19px;color:#131313;font-size:16px">
                                                                        ${name} requested to Contact you!<br></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="es-m-p15t es-m-p0b es-m-p0r es-m-p0l" align="left"
                                            style="padding:0;Margin:0;padding-top:15px">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:600px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><a
                                                                        target="_blank" href="https://jayantkageri.in/"
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#2CB543;font-size:16px"><img
                                                                            class="adapt-img"
                                                                            src="https://vvefmw.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/3991592481152831.png"
                                                                            alt="@jayantkageri"
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="600" title="@jayantkageri"></a></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr>
                            <td align="center" bgcolor="#071f4f"
                                style="padding:0;Margin:0;background-color:#071f4f;background-image:url(https://vvefmw.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/10801592857268437.png);background-repeat:no-repeat;background-position:center top"
                                background="https://vvefmw.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/10801592857268437.png">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-left:30px;padding-right:30px;padding-top:40px;padding-bottom:40px">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:540px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center" height="20"
                                                                    style="padding:0;Margin:0"></td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-bottom:10px">
                                                                    <h1
                                                                        style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff;text-align:center">
                                                                        DETAILS</h1>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#ffffff;font-size:16px">
                                                                        <em><strong>↦ REFRENCE Number: ${id}</strong></em>
                                                                    </p>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#ffffff;font-size:16px">
                                                                        <br>
                                                                    </p>
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#ffffff;font-size:16px">
                                                                        → NAME: ${name}<br>↣ EMAIL ID: ${email}<br>↣ IP
                                                                        Address: <a
                                                                            href="https://ipinfo.io/${ip}">${ip}</a><br><strong>↳
                MESSAGE:
                                                                        </strong > ${message}</p >
                                                                </td >
                                                            </tr >
                                                        </table >
                                                    </td >
                                                </tr >
                                            </table >
                                        </td >
                                    </tr >
                                </table >
                            </td >
                        </tr >
                    </table >
            <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                <tr>
                    <td align="center" bgcolor="#f8f9fd"
                        style="padding:0;Margin:0;background-color:#f8f9fd;background-image:url(https://vvefmw.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/83191592482092483.png);background-repeat:no-repeat;background-position:center center"
                        background="https://vvefmw.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/83191592482092483.png">
                        <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                            cellspacing="0"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                            <tr>
                                <td align="left"
                                    style="Margin:0;padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:40px">
                                    <table cellpadding="0" cellspacing="0" width="100%"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                        <tr>
                                            <td align="center" valign="top"
                                                style="padding:0;Margin:0;width:281px">
                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                    role="presentation"
                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                    <tr>
                                                        <td align="left" style="padding:0;Margin:0">
                                                            <h1
                                                                style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#212121;text-align:center">
                                                                JAYANT HEGDE KAGERI</h1>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center" class="es-m-txt-c"
                                                            style="padding:0;Margin:0;padding-top:15px">
                                                            <p
                                                                style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#131313;font-size:16px">
                                                                <em>Nothing is easy in life when you aren't
                                                                    interested</em><br>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"
                                                            style="padding:0;Margin:0;font-size:0">
                                                            <table cellpadding="0" cellspacing="0"
                                                                class="es-table-not-adapt es-social"
                                                                role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr>
                                                                    <td align="center" valign="top"
                                                                        style="padding:0;Margin:0;padding-right:10px">
                                                                        <a target="_blank"
                                                                            href="https://links.jayantkageri.in/twitter"
                                                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#2CB543;font-size:16px"><img
                                                                                src="https://vvefmw.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png"
                                                                                alt="Tw" title="Twitter"
                                                                                width="32"
                                                                                style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                    </td>
                                                                    <td align="center" valign="top"
                                                                        style="padding:0;Margin:0;padding-right:10px">
                                                                        <a target="_blank"
                                                                            href="https://links.jayantkageri.in/facebook"
                                                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#2CB543;font-size:16px"><img
                                                                                src="https://vvefmw.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png"
                                                                                alt="Fb" title="Facebook"
                                                                                width="32"
                                                                                style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                    </td>
                                                                    <td align="center" valign="top"
                                                                        style="padding:0;Margin:0"><a
                                                                            target="_blank"
                                                                            href="https://links.jayantkageri.in/youtube"
                                                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#2CB543;font-size:16px"><img
                                                                                src="https://vvefmw.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png"
                                                                                alt="Yt" title="Youtube"
                                                                                width="32"
                                                                                style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
                </td >
            </tr >
        </table >
    </div >
</body >

</html >
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
        transporter.verify(function (error: any, success: any) {
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
        }, (error: any, info: any) => {
            if (error) reject(error)
            resolve(info.response.includes("accepted"))
        })
    })
}


async function contact(req: NextApiRequest, res: NextApiResponse) {
    // Try the contact function
    try {
        if (req?.method?.toString().toUpperCase() !== "POST") {
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


        let response: {email?: boolean, telegram?: boolean} = {}

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
    } catch (err: any) {
        // If any error occurs, sending the error to the client
        return res.status(500).send({ success: false, message: err.message })
    }
}

export default contact