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
    - IP Address: ${ip} [https://ipinfo.io/${ip}]
    - Message:
    ${message}
`

        const html = `
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    style="font-family:Nunito, Roboto, sans-serif">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Contact Request ${id}</title>
    <!--[if (mso 16)]><style type="text/css"> a {text-decoration: none;} </style><![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap" rel="stylesheet">
    <!--<![endif]-->
    <style type="text/css">
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

        [data-ogsb] .es-button {
            border-width: 0 !important;
            padding: 10px 40px 10px 40px !important;
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
                line-height: 120%
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

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px !important
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 26px !important
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important
            }

            .es-menu td a {
                font-size: 16px !important
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
                font-size: 16px !important
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
                font-size: 20px !important;
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
                padding: 0px !important
            }

            .es-m-p0r {
                padding-right: 0px !important
            }

            .es-m-p0l {
                padding-left: 0px !important
            }

            .es-m-p0t {
                padding-top: 0px !important
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

            .es-menu td {
                width: 1% !important
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

            .es-desk-hidden {
                display: table-row !important;
                width: auto !important;
                overflow: visible !important;
                max-height: inherit !important
            }
        }
    </style>
</head>

<body data-new-gr-c-s-loaded="14.1079.0"
    style="width:100%;font-family:Nunito, Roboto, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#222222">
        <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" src="https://vvefmw.stripocdn.email/content/guids/CABINET_0d926ce39655859bf4a418e50bdc5a76/images/61521627468320605.png" color="#222222" origin="0.5, 0" position="0.5, 0"></v:fill> </v:background><![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
            background="https://vvefmw.stripocdn.email/content/guids/CABINET_0d926ce39655859bf4a418e50bdc5a76/images/61521627468320605.png"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-image:url(https://vvefmw.stripocdn.email/content/guids/CABINET_0d926ce39655859bf4a418e50bdc5a76/images/61521627468320605.png);background-repeat:repeat;background-position:center top">
            <tr>
                <td valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" class="es-header" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-header-body" align="center" cellpadding="0" cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px">
                                            <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:223px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td class="es-m-p0r es-m-p20b" valign="top" align="center"
                                                        style="padding:0;Margin:0;width:223px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;display:none"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:317px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:317px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;display:none"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-content-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;border-radius:10px 10px 0px 0px;width:600px"
                                    cellspacing="0" cellpadding="0" bgcolor="#333333" align="center">
                                    <tr>
                                        <td align="left" style="padding:20px;Margin:0;border-radius:10px 0 0 10px">
                                            <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:175px" valign="top"><![endif]-->
                                            <table cellspacing="0" cellpadding="0" align="left" class="es-left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td class="es-m-p0r es-m-p20b" valign="top" align="center"
                                                        style="padding:0;Margin:0;width:175px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            bgcolor="#D54F10"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#d54f10;border-radius:10px 0 0 10px"
                                                            role="presentation">
                                                            <tr>
                                                                <td align="center"
                                                                    style="Margin:0;padding-left:15px;padding-right:15px;padding-top:20px;padding-bottom:25px;font-size:0px">
                                                                    <a target="_blank"
                                                                        href="links.jayantkageri.in/website"
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#D54F10;font-size:17px"><img
                                                                            src="https://vvefmw.stripocdn.email/content/guids/CABINET_77bb7d5d85fbe7170ebeaea23c42575c/images/jayantkageri_nli.png"
                                                                            alt="Jayant Hegde Kageri"
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="109" title="Jayant Hegde Kageri"></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:0px"></td><td style="width:385px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:385px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            bgcolor="#D54F10"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#d54f10;border-radius:0px 10px 10px 0px"
                                                            role="presentation">
                                                            <tr>
                                                                <td align="left"
                                                                    style="Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:30px">
                                                                    <h1
                                                                        style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;font-size:36px;font-style:normal;font-weight:bold;color:#ffffff">
                                                                        Jayant Hegde Kageri</h1>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="es-m-txt-c"
                                                                    style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:26px;color:#ffffff;font-size:17px">
                                                                        Nothing is easy in life when you aren't
                                                                        interested.<br></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;border-radius:0px 0px 10px 10px;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-bottom:20px">
                                                                    <h1
                                                                        style="Margin:0;line-height:43px;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;font-size:36px;font-style:normal;font-weight:bold;color:#D54F10">
                                                                        Contact Request (${id})</h1>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-bottom:10px">
                                                                    <h2
                                                                        style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#efefef">
                                                                        Someone wants to get in touch with you!</h2>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left" style="padding:0;Margin:0"><span
                                                                        class="es-button-border"
                                                                        style="border-style:solid;border-color:#D54F10;background:#333333;border-width:2px;display:inline-block;border-radius:30px;width:auto"><a
                                                                            href="" class="es-button" target="_blank"
                                                                            style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;border-style:solid;border-color:#333333;border-width:10px 40px 10px 40px;display:inline-block;background:#333333;border-radius:30px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center">DETAILS
                                                                            PROVIDED</a></span></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
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
                                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
                                                                    <table border="0" width="100%" height="100%"
                                                                        cellpadding="0" cellspacing="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr>
                                                                            <td
                                                                                style="padding:0;Margin:0;border-bottom:1px solid #111111;background:none;height:1px;width:100%;margin:0px">
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
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-bottom:5px;padding-left:20px;padding-right:20px">
                                            <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:26px;color:#999999;font-size:17px">
                                                                        NAME</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:26px;color:#d54f10;font-size:17px">
                                                                        ${name}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px">
                                            <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:26px;color:#999999;font-size:17px">
                                                                        IP ADDRESS</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td>
<td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:26px;color:#EFEFEF;font-size:17px">
                                                                        <a target="_blank"
                                                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#D54F10;font-size:17px"
                                                                            href="https://ipinfo.io/${ip}">${ip}</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px">
                                            <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:26px;color:#999999;font-size:17px">
                                                                        E-MAIL<br></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td>
<td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:26px;color:#EFEFEF;font-size:17px">
                                                                        <a target="_blank" href="mailto:${email}"
                                                                            style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#D54F10;font-size:17px">${email}</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-top:5px;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                            <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:26px;color:#999999;font-size:17px">
                                                                        <b>MESSAGE</b>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td>
<td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:26px;color:#EFEFEF;font-size:17px">
                                                                    <p
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#D54F10;font-size:17px">
                                                                        ${message}</p>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
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
                                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
                                                                    <table border="0" width="100%" height="100%"
                                                                        cellpadding="0" cellspacing="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr>
                                                                            <td
                                                                                style="padding:0;Margin:0;border-bottom:1px solid #111111;background:none;height:1px;width:100%;margin:0px">
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
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr>
                            <td class="es-info-area" align="center" style="padding:0;Margin:0">
                                <table class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                    <tr>
                                        <td align="left" style="padding:20px;Margin:0">
                                            <table cellpadding="0" cellspacing="0" width="100%"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center" class="es-infoblock"
                                                                    style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">
                                                                        Jayant Hegde Kageri - Nothing is easy in life
                                                                        when you aren't interested.</p>
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
    </div>
</body>
</html>
        `
        // Creating the transporter
        const transporter = createTransport({
            // @ts-ignore
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
            sender: `Server - Jayant Hegde Kageri <${process.env.EMAIL_ID}>`
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
            from: `Contact - Jayant Hegde Kageri <${process.env.EMAIL_ID}>`,
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
            return res.status(405).send("")
        }

        // Validations
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.email ||
            !req.body.message ||
            process.env.HCAPTCHA_SECRET && !req.body.token
        ) {
            return res.status(400).send({ success: false, message: "Bad Request" })
        }

        if (!await emailValidation(req.body.email)) {
            return res.status(400).send({ success: false, message: "Invalid Email ID" })
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
        return res.status(201).send({ success: true, type: response, sent: response.email || response.telegram || false })
    } catch (err: any) {
        // If any error occurs, sending the error to the client
        return res.status(500).send({ success: false, message: err.message })
    }
}

export default contact