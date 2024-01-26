/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEBSITE_URL: "https://good-food-sand.vercel.app"
  },
  i18n: {
    locales: ["ru", "ka", "en"],
    defaultLocale: "ru",
    localeDetection: false,
  },
}

module.exports = nextConfig
