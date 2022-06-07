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
import jayantkageri from "../assets/jayantkageri.png";

export default function Home() {
  return (
    <>
      <section id="home" className="bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center mb-6">
            <div className="w-full space-y-12 lg:w-1/2 ">
              <div>
                <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white">
                  Jayant Hegde Kageri
                </h1>

                <p className="mt-2 italic text-gray-300">
                  Nothing is easy in life when you aren&apos;t interested.
                </p>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 rounded-xl md:mx-4 text-white bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold capitalize text-white">
                    Fullstack Developer
                  </h1>

                  <p className="mt-3 text-gray-300">
                    I am a Fullstack Developer with experience building NextJS,
                    ReactJS, ExpressJS, and Python apps using TailwindCSS and
                    Bootstrap for designing.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2  rounded-xl md:mx-4 text-white bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold capitalize text-white">
                    Fully Flexible Applications
                  </h1>

                  <p className="mt-3 text-gray-300">
                    With the power of TailwindCSS and NextJS, all of my websites
                    are flexible and fully customizable configurations.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 rounded-xl md:mx-4 text-white bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 512 512"
                    stroke="currentColor"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#fff"
                      stroke="none"
                    >
                      <path
                        d="M323 4955 c-153 -33 -283 -168 -313 -324 -6 -35 -10 -577 -10 -1540
0 -1601 -2 -1539 50 -1642 45 -87 143 -168 244 -202 44 -15 128 -17 803 -17
l753 0 0 -285 0 -285 -143 0 c-134 0 -146 -2 -196 -26 -83 -42 -141 -137 -141
-233 0 -56 38 -137 84 -179 75 -69 97 -72 523 -72 l373 0 -26 42 c-39 61 -73
142 -96 228 -20 70 -21 109 -25 613 l-5 537 -904 0 c-887 0 -904 0 -924 20
-11 11 -22 30 -25 42 -3 13 -4 681 -3 1485 l3 1462 23 23 23 23 2169 0 2169 0
23 -23 c23 -22 23 -24 26 -355 l3 -333 82 -16 c49 -11 117 -35 170 -61 l87
-43 0 392 c0 223 -4 414 -10 445 -21 111 -102 223 -204 283 -100 58 11 56
-2351 55 -1780 0 -2181 -3 -2232 -14z"
                      />
                      <path
                        d="M2892 3569 c-148 -29 -276 -147 -322 -297 -20 -62 -20 -98 -20 -1396
0 -1079 3 -1340 14 -1381 39 -148 140 -257 284 -306 51 -17 89 -19 462 -19
l406 0 -27 58 c-37 78 -49 169 -49 376 l0 176 -375 0 -375 0 0 1190 c0 1326
-5 1239 68 1260 26 8 300 10 899 8 l863 -3 27 -28 28 -27 3 -385 3 -385 102 0
c96 -1 138 -9 220 -45 16 -7 17 16 17 401 0 448 -6 503 -57 591 -61 106 -179
192 -292 213 -66 12 -1816 12 -1879 -1z"
                      />
                      <path
                        d="M4000 2187 c-47 -15 -116 -86 -129 -133 -7 -26 -11 -308 -11 -864 0
-776 2 -827 19 -865 19 -43 78 -100 118 -116 14 -5 228 -9 494 -9 445 0 472 1
508 19 50 26 97 81 110 128 7 25 11 316 11 858 l0 820 -24 50 c-27 59 -46 77
-106 104 -43 20 -63 21 -500 20 -304 -1 -467 -5 -490 -12z m860 -927 l0 -680
-370 0 -370 0 0 680 0 680 370 0 370 0 0 -680z m-308 -810 c26 -27 30 -36 25
-68 -8 -46 -47 -82 -88 -82 -42 0 -89 48 -89 90 0 22 9 41 29 61 40 40 82 39
123 -1z"
                      />
                    </g>
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold  capitalize text-white">
                    Responsive Applications
                  </h1>

                  <p className="mt-3 text-gray-300">
                    Whether a mobile or desktop client, I can build a fully
                    responsive website for all the devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex object-cover items-center lg:w-1/2 justify-center lg-mt-5 mt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-[20rem] h-[20rem] object-cover xl:w-[31rem] xl:h-[31rem] rounded-full select-none text-white"
                src={jayantkageri.src}
                alt="@jayantkageri"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
