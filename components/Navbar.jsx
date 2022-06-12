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
import Link from "next/link";
import { useRouter } from "next/router";
import jayantkageri from "../assets/jayantkageri.png";

export default function Navbar() {
  const menu = React.useRef();
  const router = useRouter();

  const navigation = [
    {
      name: "Home",
      href: "/",
      active: router.pathname === "/",
    },
    {
      name: "Contact",
      href: "/contact",
      active: router.pathname === "/contact",
    },
    {
      name: "Social",
      href: "/social",
      active: router.pathname === "/social",
    },
    {
      name: "Video",
      href: "/intro",
      active: router.pathname === "/intro",
    },
  ];

  return (
    <>
      <nav className="shadow bg-gray-900 select-none border-b border-b-indigo-600">
        <div className="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link href={"/"}>
                <a className="text-2xl font-bold  transition-colors duration-200 transform text-white lg:text-3xl hover: dark:hover:text-gray-300">
                  <img
                    src={jayantkageri.src}
                    alt="Jayant Hegde Kageri"
                    className="w-14 rounded-full"
                  />
                </a>
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
                onClick={() => {
                  if (menu.current.classList.contains("hidden")) {
                    return menu.current.classList.remove("hidden");
                  }
                  return menu.current.classList.add("hidden");
                }}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className="items-center md:flex transition-transform transform md:flex-center p-4 hidden md:border-0 md:mt-0 border-t mt-3"
            ref={menu}
            onClick={() => {
              !menu.current.classList.contains("hidden") &&
                menu.current.classList.add("hidden");
            }}
          >
            <div className="flex flex-col md:flex-row md:mx-6 transition-transform">
              {navigation.map((nav) => {
                return (
                  <Link href={nav.href} key={nav.name}>
                    <a
                      className={`my-1 text-2xs font-medium transition-colors duration-200 transform ${
                        !nav.active ? "text-gray-200" : "text-indigo-600"
                      } hover:text-blue-500 md:mx-4 md:my-0 self-center`}
                    >
                      {nav.name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
