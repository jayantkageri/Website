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
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact(props) {
  const [info, setInfo] = React.useState({});
  const ref = React.useRef();
  const hcaptcha = React.useRef();

  const onChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const eMailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const onSubmit = async (e) => {
    e.preventDefault();
    setInfo({ ...info, loading: true });

    if (!info.name || !info.email || !info.message) {
      setInfo({ ...info, loading: false });
      return props.alert("error", "Please fill all the fields");
    }

    if (!info.email.toString().toLowerCase().match(eMailRegex)) {
      setInfo({ ...info, loading: false });
      return props.alert("error", "Please enter a valid email");
    }

    if (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && !info.token) {
      props.addEvent(
        "contact",
        "jayantkageri.in - Tried to send message without completing captcha"
      );

      setInfo({ ...info, loading: false });
      return props.alert("error", "Please solve the hCaptcha");
    }

    let data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || ""}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*/*",
        },
        body: JSON.stringify(info),
      }
    );

    data = await data.json();

    if (!data.success && data.message) {
      props.addEvent("contact", `jayantkageri.in - error: ${data.message}`);

      setInfo({});
      ref.current.reset();
      process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY &&
        hcaptcha.current.resetCaptcha();
      return props.alert("error", data.message);
    }

    if (!data.sent) {
      setInfo({});
      props.addEvent(
        "contact",
        "jayantkageri.in - got an error while sending message to Telegram"
      );

      ref.current.reset();
      process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY &&
        hcaptcha.current.resetCaptcha();
      return props.alert("error", "Something went wrong");
    }

    props.addEvent("contact", "jayantkageri.in - submitted a contact request");
    setInfo({});
    ref.current.reset();
    process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY &&
      hcaptcha.current.resetCaptcha();
    props.alert("success", "Message sent successfully");
  };

  return (
    <>
      <section className="bg-gray-900 min-h-screen">
        <div className="container px-6 py-10 mx-auto">
          <div className="w-full mx-auto flex justify-center">
            <div>
              <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white text-center">
                Contact <br /> Jayant Hegde Kageri
              </h1>

              <div className="mt-4 mx-auto flex justify-center">
                <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
          </div>

          <div className="mt-10 md:w-1/2 w-md md:mx-auto mx-4">
            <form onSubmit={onSubmit} ref={ref}>
              <div className="-mx-2 md:flex">
                <div className="w-full mx-2">
                  <label className="block mb-2 text-sm font-medium text-gray-200">
                    Name
                  </label>

                  <input
                    className="block w-full px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 disabled:bg-gray-700"
                    type="text"
                    id="name"
                    onChange={onChange}
                    value={info.name || ""}
                    disabled={info.loading}
                  />
                </div>

                <div className="w-full mx-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm font-medium text-gray-200">
                    E-mail
                  </label>

                  <input
                    className="block w-full px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 disabled:bg-gray-700"
                    type="email"
                    id="email"
                    onChange={onChange}
                    value={info.email || ""}
                    disabled={info.loading}
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-200">
                  Message
                </label>

                <textarea
                  className="block w-full h-40 px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 disabled:bg-gray-700"
                  id="message"
                  onChange={onChange}
                  value={info.message || ""}
                  disabled={info.loading}
                />
              </div>
              {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ? (
                <div className="flex flex-wrap">
                  <div className="mt-6 w-1/2 select-none">
                    <HCaptcha
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                      theme="dark"
                      size="normal"
                      ref={hcaptcha}
                      onVerify={(token) => setInfo({ ...info, token: token })}
                      onExpire={() => setInfo({ ...info, token: null })}
                    />
                  </div>
                  <div className="flex justify-center mx-10 max-h-16 mt-8">
                    <button
                      className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center mx-10 max-h-16 mt-8">
                  <button
                    className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
