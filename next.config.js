/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "https://nextjs-app.imgix.net",
  },
};

module.exports = nextConfig;