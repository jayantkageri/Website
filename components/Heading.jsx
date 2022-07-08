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

export default function Heading(props) {
  return (
    <div className="w-full mx-auto flex justify-center">
      <div>
        <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white text-center">
          {props.title}
          <br />
          Jayant Hegde Kageri
        </h1>

        <div className="mt-4 mx-auto flex justify-center">
          <span className="inline-block w-40 h-1 rounded-full bg-blue-500" />
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500" />
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500" />
        </div>
      </div>
    </div>
  );
}
