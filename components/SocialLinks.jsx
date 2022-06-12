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

export default function SocialLinks(props) {
  return (
    <>
      <style jsx>{`
        #${props.name}:hover {
          color: ${props.color};
        }
      `}</style>

      <a
        className={
          "flex flex-row w-full px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-900 hover:border-gray-400 transition-all justify-center hover:translate-x-2 cursor-pointer select-none"
        }
        id={props.name}
        onClick={() => props.ga("social", `Clicked ${props.name} Link`)}
        href={props.link}
        target={"_blank"}
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 mr-1"
          viewBox="0 0 16 16"
        >
          <path d={props.svg} />
          {props.svgd && <path d={props.svgd} />}
        </svg>
        <span className="text-xl -mt-0.5">{props.name}</span>
      </a>
    </>
  );
}
