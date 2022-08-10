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
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { ToastContainer, toast, type TypeOptions, Id, Slide } from "react-toastify";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    // Function to use React Toastify easily.
    const alert = (info: TypeOptions, message: string): Id => toast(message, {type: info});

    // Function to use React Toastify loading
    const loading = (message: string): Id => toast.loading(message, {closeOnClick: true});
    const update = (id: Id, info: TypeOptions, message: string) => toast.update(id, {isLoading: false, type: info, render: message, hideProgressBar: false, closeOnClick: true, autoClose: 50, transition: Slide});

  // States
  const [info, setInfo] = React.useState<{page: string|null, notice: boolean}>({notice: false, page: null});

  // Next Router
  const router = useRouter();

  // AGPL-3.0-or-later License Notice
  if (!info?.notice) {
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
        setInfo({ ...info, page: null });
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
      <ToastContainer theme="dark" limit={4} />
      <main className="bg-gray-900 min-h-screen">
        {/* Main content of the page */}
        <Component {...pageProps} toastify={{
          alert,
          loading,
          update
        }} />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );

}

export default App
