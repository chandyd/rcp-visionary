/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com", "robertocalvoproductions.com"],
  },
  trailingSlash: true,
  output: 'standalone'
};

module.exports = nextConfig;
