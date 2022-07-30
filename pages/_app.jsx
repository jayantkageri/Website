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
import ReactGA from "react-ga";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
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

  // Google Analytics
  class GoogleAnalytics {
    // Checking if the Google Analytics is enabled.
    static gaEnabled = Boolean(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);

    // Initializing the Google Analytics.
    static initialize = () => {
      // Conditions
      if (this.gaEnabled) {
        // Initializing the Google Analytics.
        ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);

        ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
          standardImplementation: true,
          redactEmail: false,
          useExistingGa: true,
        });

        // Setting the Custom Dimension.
        ReactGA.set({ page: router.pathname });
      }
    };

    // Logging an Event.
    static addEvent = (category, action) => {
      // Conditions
      if (this.gaEnabled) {
        // Logging the Event.
        ReactGA.event({ category, action });
      }
    };

    // Logging a Outbound Link.
    static outboundLink = (url) => {
      // Conditions
      if (this.gaEnabled) {
        // Logging the Outbound Link.
        ReactGA.outboundLink({ label: url }, () => {
          return;
        });
      }
    };

    // Logging a Pageview.
    static pageview = (page) => {
      // Conditions
      if (this.gaEnabled) {
        // Custom Dimension
        ReactGA.set({ page });
        // Logging the Pageview.
        ReactGA.pageview(page);
      }
    };
  }

  // AGPL-3.0-or-later License Notice
  if (!info.notice) {
    console.info("Website of jayantkageri, NextJS Site for jayantkageri.in");
    console.info(
      `Copyright (C) ${
        new Date().getFullYear() === 2021
          ? 2021
          : `2021 - ${new Date().getFullYear()}`
      } Jayant Hegde Kageri <https://github.com/jayantkageri>`
    );
    console.info(
      "This website is licensed under GNU Affero General Public License v3.0 or later (AGPL-3.0-or-later)."
    );
    console.info(
      "You can find the source code at https://links.jayantkageri.in/source-code"
    );

    setInfo({ ...info, notice: true });
  }

  React.useEffect(() => {
    // Check the user if he has accepted the cookies.
    localStorage &&
      !localStorage.getItem("cookies") &&
      setInfo({ ...info, cookies: false });

    // Initialize Google Analytics
    GoogleAnalytics.initialize();

    // Add pageview to Google Analytics
    GoogleAnalytics.pageview(router.pathname);

    // Title for the page.
    switch (router.pathname) {
      case "/contact":
        setInfo({ ...info, page: "Contact" });
        break;

      case "/social":
        setInfo({ ...info, page: "Social Media" });
        break;

      case "/intro":
        setInfo({ ...info, page: "Intro" });
        break;

      case "/legal":
        setInfo({ ...info, page: "Legal" });
        break;

      case "/":
        setInfo({ ...info, page: undefined });
        break;

      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

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
        <Component
          {...pageProps}
          alert={alert}
          GoogleAnalytics={GoogleAnalytics}
        />
      </main>
      {/* Footer */}
      <Footer GoogleAnalytics={GoogleAnalytics} />
    </>
  );
}

export default App;
