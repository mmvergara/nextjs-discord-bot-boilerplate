/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BOT_TOKEN: process.env.BOT_TOKEN,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    REGISTER_COMMANDS_KEY: process.env.REGISTER_COMMANDS_KEY,
  },
}

module.exports = nextConfig
