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

import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Heading from "../components/Heading";
import toast, { ToastOptions } from "react-hot-toast";

export default function Contact() {
  // States for the form.
  const [info, setInfo] = React.useState<{
    name?: string;
    email?: string;
    message?: string;
    loading?: boolean;
    token?: string | null;
  }>();
  // Refrences for form and hCaptcha.
  const ref = React.useRef<HTMLFormElement>();
  const hcaptcha = React.useRef<HCaptcha>();

  const onChange = (e: React.ChangeEvent) => {
    let target: HTMLInputElement = e.target as HTMLInputElement;
    // onChange function for the form.
    setInfo({ ...info, [target.id]: target.value });
  };

  // Regex Expression for the email validation.
  const eMailRegex = new RegExp(
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  // Handling the form submission.
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    // Preventing the default form submission action of HTML.
    e.preventDefault();
    // Set loading to true.
    setInfo({ ...info, loading: true });
    const options: ToastOptions = {
      style: {
        borderRadius: "40px",
        background: "#333",
        color: "#fff",
        userSelect: "none",
      },
      duration: 5000,
    };

    const id = toast.loading("Sending your message...", options);

    // Validation
    if (!info?.name || !info?.email || !info?.message) {
      setInfo({ ...info, loading: false });
      return toast.error("Please fill all the fields.", {
        ...options,
        id: id,
      });
    }

    // eMail Validation
    if (!eMailRegex.test(info.email.toString().toLowerCase())) {
      setInfo({ ...info, loading: false });
      return toast.error("Please enter a valid email address.", {
        ...options,
        id: id,
      });
    }

    // Captcha Validation
    if (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && !info?.token) {
      // Alert the user
      setInfo({ ...info, loading: false });
      return toast.error("Please solve hCaptcha", {
        ...options,
        id: id,
      });
    }

    // Sending data to backend API.
    const req = await fetch(
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

    // Awaiting the response
    type DataType = {
      success: boolean;
      sent?: boolean;
      type?: Object;
      message?: string;
    };
    const res: DataType = await req.json();

    // Exceptions for error.
    if (!res.success && res.message) {
      // Reset the form.
      setInfo({
        name: "",
        email: "",
        message: "",
        loading: false,
        token: null,
      });
      ref?.current?.reset();
      // Reset the captcha.
      process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY &&
        hcaptcha?.current?.resetCaptcha();
      //  Alert the user.
      return toast.error(res.message, {
        ...options,
        id: id,
      });
    }

    // If Telegram was unable to send the message
    if (!res.sent) {
      // Reset the form.
      setInfo({});
      ref?.current?.reset();
      // Reset the captcha
      process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY &&
        hcaptcha?.current?.resetCaptcha();
      // Alert the user.
      return toast.error("Something went wrong", {
        ...options,
        id: id,
      });
    }

    // Reset the form.
    setInfo({});
    ref?.current?.reset();
    // Reset the captcha
    process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY &&
      hcaptcha?.current?.resetCaptcha();
    // Alert the user.
    return toast.success("Message sent successfully.", {
      ...options,
      id: id,
    });
  };

  return (
    <>
      <section id="contact" className="bg-gray-900 min-h-screen">
        <div className="container px-6 py-10 mx-auto">
          <Heading title={"Contact"} />

          <div className="mt-10 md:w-1/2 w-md md:mx-auto mx-4 select-none">
            {/* @ts-ignore */}
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
                    value={info?.name || ""}
                    disabled={info?.loading}
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
                    value={info?.email || ""}
                    disabled={info?.loading}
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
                  value={info?.message || ""}
                  disabled={info?.loading}
                />
              </div>
              {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ? (
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center mt-6 w-1/2 select-none">
                    <HCaptcha
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                      theme="dark"
                      size="normal"
                      // @ts-ignore
                      ref={hcaptcha}
                      onVerify={(token) => setInfo({ ...info, token: token })}
                      onExpire={() => setInfo({ ...info, token: null })}
                    />
                  </div>
                  <div className="flex mx-10 max-h-16 mt-8">
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
