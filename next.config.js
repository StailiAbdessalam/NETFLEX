/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "image.tmdb.org"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
