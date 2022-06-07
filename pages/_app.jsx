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
import ReactGA from "react-ga";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  // Function to use React Toastify easily.
  const alert = (type, messgae) => {
    toast[type](messgae);
  };

  // Cookies States
  const [info, setInfo] = React.useState({ cookies: true });

  // Next Router
  const router = useRouter();

  React.useEffect(() => {
    // Check the user if he has accepted the cookies.
    localStorage &&
      !localStorage.getItem("cookies") &&
      setInfo({ ...info, cookies: false });

    // Title for the page.
    switch (router.pathname) {
      case "/contact":
        setInfo({ ...info, page: "Contact" });
        break;

      case "/intro":
        setInfo({ ...info, page: "Intro" });
        break;

      case "/":
        setInfo({ ...info, page: undefined });
        break;

      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  // Initialize Google Analytics.
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID &&
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);

  // Send pageview to Google Analytics.
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID &&
    ReactGA.pageview(router.pathname);

  // Easy function to add an event to Google Analytics.
  const addEvent = (category, action) => {
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID &&
      ReactGA.event({ category, action });
  };

  return (
    <>
      {/* Meta Tags for all the pages */}
      <Meta page={info.page} />
      {/* Navbar */}
      <Navbar />
      {/* React Toastify */}
      <ToastContainer />

      <main className="bg-gray-900 min-h-screen">
        {/* Cookies accepting section */}
        {!info.cookies && (
          <div className="flex justify-center bg-indigo-500">
            <div className="max-w-md text-white m-3">
              This site uses cookies for technical and analytical purposes.
              <div className="buttons space-x-3 flex flex-row justify-center mt-2">
                <button
                  className="bg-blue-900 px-4 rounded-xl text-slate-100 py-1"
                  onClick={() => {
                    setInfo({ ...info, cookies: true });
                    localStorage.setItem("cookies", true);
                  }}
                >
                  <span>Accpet and Continue</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main content of the page */}
        <Component {...pageProps} alert={alert} addEvent={addEvent} />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
