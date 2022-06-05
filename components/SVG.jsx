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

export default function SVG(props) {
  return (
    <a
      href={props.link}
      target={"_blank"}
      rel="noreferrer"
      className="mx-2 text-gray-300 hover:text-indigo-600 transition-colors"
      aria-label={props.title}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-current"
        viewBox="0 0 16 16"
      >
        <title>{props.title}</title>
        <path fillRule="evenodd" d={props.svg} />
      </svg>
    </a>
  );
}
