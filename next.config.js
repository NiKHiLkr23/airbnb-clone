/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "a0.muscache.com",
      "image.insider.com",
      "static.trip101.com",
      "media.cntraveler.com",
      "cdn.bisnow.net",
      "www.smartertravel.com",
      "www.expatkings.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
