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
  env: {
    mapbox_key:
      "pk.eyJ1IjoibmlraGlsa3IiLCJhIjoiY2xkazAxcjU5MDFvdzN1bzM4MG9xOGtnNSJ9.7cWrPNYL9QfIt3CifRmArQ",
  },
};

module.exports = nextConfig;
