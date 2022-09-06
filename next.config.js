/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  ignoreBuildErrors: true,
  env: {
    BUCKET_NAME: process.env.BUCKET_NAME,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
};

module.exports = nextConfig;
