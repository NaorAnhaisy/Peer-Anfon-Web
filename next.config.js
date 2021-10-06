module.exports = {
  images: {
    domains: ['images.prismic.io'],
  },
  publicRuntimeConfig: {
    CLIENT_URL: process.env.NODE_ENV === "production" ? "https://peer-anfon-luxery/server" : "http://localhost:5000/server",
  },
  reactStrictMode: true
}