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

import React from "react";

export default function Error(props) {
  // Hyderation Error
  const [info, setInfo] = React.useState({ code: NaN, message: undefined });
  React.useEffect(() => {
    setInfo({ code: props.code, message: props.message });
  }, [props.code, props.message]);

  return (
    // Hyderation Error
    info.code &&
    info.message && (
      <>
        <section id={info.code} className="min-h-screen bg-gray-900">
          <body className="antialiased">
            <div className="relative flex items-top justify-center min-h-screen bg-gray-900 sm:items-center sm:pt-0">
              <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
                  <div className="px-4 text-xl text-gray-400 border-r border-gray-400 tracking-wider">
                    {info.code}
                  </div>

                  <div className="ml-4 text-xl text-gray-400 uppercase tracking-wider">
                    {info.message}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </section>
      </>
    )
  );
}

Error.getInitialProps = ({ res }) => {
  // Status Codes
  const messages = {
    // Informational Response Codes
    101: "Continue",
    102: "Switching Protocols",
    103: "Early Hints",

    // Successful Response Codes
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    226: "IM Used",

    // Redirection Response Codes
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",

    // Client Error Response Codes
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",

    // Server Error Response Codes
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required",
  };

  // Returning the status code and message
  return { code: res.statusCode, message: messages[res.statusCode] };
};
