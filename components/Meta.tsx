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

import Head from "next/head";
import Script from "next/script";
import React from "react";

export default function Meta(props: {page: string|null}) {
  const page = props.page
    ? `${props.page} - Jayant Hegde Kageri`
    : "Jayant Hegde Kageri - Developer";

  const description =
    "Nothing is Easy in life when you aren't interested. | Developer from India";

  const keywords =
    "jayant, hegde, kageri, jayantkageri, @jayantkageri, developer, kageri250, jayant hegde kageri, jayant kageri, jayant hegde, nothing is easy in life when you aren't interested, nothing is easy in life when you are not interested.";

  return (
    <>
    <Head>
      <title>{page}</title>
      <meta content="" name={description} />
      <meta content="" name={keywords} />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <meta name="author" content="Jayant Hegde Kageri" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta property="og:title" content={page} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jayantkageri.in" />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Jayant Hegde Kageri" />
      <meta
        property="article:author"
        content="https://github.com/jayantkageri"
      />
      <meta property="article:publisher" content="https://jayantkageri.in" />
      <meta
        property="og:image"
        content="/assets/img/favicons/android-icon-192x192.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jayantkageri" />
      <meta name="twitter:creator" content="@jayantkageri" />
      <meta name="twitter:title" content={page} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="/assets/img/favicons/android-icon-192x192.png"
      />

      <link
        rel="icon"
        href="/assets/img/favicons/android-icon-192x192.png"
        type="image/x-icon"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/assets/img/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/assets/img/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/assets/img/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/assets/img/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/assets/img/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/assets/img/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/assets/img/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/assets/img/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/img/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/assets/img/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/img/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/assets/img/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/img/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/img/favicons/manifest.json" />

      <meta name="msapplication-TileColor" content="#111827" />
      <meta
        name="msapplication-TileImage"
        content="/assets/img/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#111827" />
    </Head>

    {/* Google Tag Manager */}
    {/* eslint-disable-next-line @next/next/next-script-for-ga */}
    <Script
      id="gtag-script"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
      }}
    />
    {/* End Google Tag Manager */}

    {/* Google Tag Manager (noscript) */}
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe id="gtag" src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
    {/* End Google Tag Manager (noscript) */}
    </>
  );
}
