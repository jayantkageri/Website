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
          border-color: ${props.color};
        }
      `}</style>

      <a
        className={
          "flex flex-row justify-center w-full px-4 py-2 text-xl select-none cursor-pointer border rounded-md bg-gray-800 text-gray-300 border-gray-600 transition-all translate-y-1 hover:bg-gray-900 hover:translate-x-2 hover:translate-y-0 hover:border-2"
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
          {typeof props.svg === "string" ? (
            <path d={props.svg} />
          ) : (
            props.svg.map((d, index) => <path key={index} d={d} />)
          )}
        </svg>
        <span className="-mt-0.5">{props.name}</span>
      </a>
    </>
  );
}
