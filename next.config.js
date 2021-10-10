module.exports = {
  images: {
    domains: ['images.prismic.io'],
  },
  publicRuntimeConfig: {
    CLIENT_URL: process.env.NODE_ENV === "production" ? "https://peer-anfon.co.il" : "http://localhost:3000",
    SERVER_URL: process.env.NODE_ENV === "production" ? "https://peer-anfon.co.il/server" : "http://localhost:5000/server",
  },
  reactStrictMode: true
}