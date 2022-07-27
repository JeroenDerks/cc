/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  ignoreBuildErrors: true,
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    UPLOAD_ORIGIN: process.env.UPLOAD_ORIGIN,
  },
};

module.exports = nextConfig;
