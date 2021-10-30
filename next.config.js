const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([], {
  images: {
    domains: ['images.prismic.io', 's3-us-west-2.amazonaws.com'],
  },
  publicRuntimeConfig: {
    CLIENT_URL: process.env.NODE_ENV === "production" ? "https://peer-anfon.co.il" : "http://localhost:3000",
    SERVER_URL: process.env.NODE_ENV === "production" ? "https://peer-anfon.co.il/server" : "http://localhost:5000/server",
  },
  reactStrictMode: true
})