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

export default function Error() {
  const [info, setInfo] = React.useState({});

  // Hyderation Error
  React.useEffect(() => {
    document && window && setInfo({ code: 404, message: "Not Found" });
  }, []);

  return (
    // Hyderation Error
    info.code &&
    info.message && (
      <>
        <section id={404} className="min-h-screen bg-gray-900">
          <body className="antialiased">
            <div className="relative flex items-top justify-center sm:items-center sm:pt-0">
              <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
                  <div className="px-4 text-xl text-gray-400 border-r border-gray-400 tracking-wider">
                    {info.code}
                  </div>

                  <div className="ml-4 text-xl text-gray-400 uppercase tracking-wider">
                    {info.message}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </section>
      </>
    )
  );
}
