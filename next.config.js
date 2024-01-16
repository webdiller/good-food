/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["ru", "ka", "en"],
    defaultLocale: "ru",
    localeDetection: false,
  },
}

module.exports = nextConfig
