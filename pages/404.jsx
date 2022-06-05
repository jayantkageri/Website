import React from "react";

export default function Error() {
  const [info, setInfo] = React.useState({ code: NaN, message: undefined });
  React.useEffect(() => {
    document && window && setInfo({ code: 404, message: "Not Found" });
  }, []);

  return (
    info.code &&
    info.message && (
      <>
        <body className="antialiased">
          <div className="relative flex items-top justify-center min-h-screen bg-gray-900 sm:items-center sm:pt-0">
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
      </>
    )
  );
}
