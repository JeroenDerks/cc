/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  ignoreBuildErrors: true,
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    BUCKET_NAME: process.env.BUCKET_NAME,
    PROJECT_ID: process.env.PROJECT_ID,
  },
};

module.exports = nextConfig;
