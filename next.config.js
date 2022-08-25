/** @type {import('next').NextConfig} */

const serverDestination = process.env.API_URL + "/:path*";

module.exports = {
  reactStrictMode: false,
  async rewrites() {
    console.log(serverDestination);
    return [
      {
        source: "/api/:path*",
        destination: serverDestination, // Proxy to Backend
      },
    ];
  },
  env: {
    // S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    // S3_REGION: process.env.S3_REGION,
    // S3_SECRET_KEY: process.env.S3_SECRET_KEY,
  },
};
