const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([], {
  async rewrites() {
    return [
      {
        source: `/${encodeURIComponent('דלתות-אוטומטיות')}`,
        destination: '/automatic-doors',
      },
      {
        source: `/${encodeURIComponent('דלתות-אוטומטיות')}/${encodeURIComponent('דלת-אוטומטית-קורסת')}`,
        destination: '/automatic-doors/collapse-door',
      },
      {
        source: `/${encodeURIComponent('דלתות-אוטומטיות')}/${encodeURIComponent('דלת-פנים-אוטומטית')}`,
        destination: '/automatic-doors/inside-door',
      },
      {
        source: `/${encodeURIComponent('דלתות-אוטומטיות')}/${encodeURIComponent('דלת-אוטומטית-טלסקופית')}`,
        destination: '/automatic-doors/telescop-door',
      },
      {
        source: `/${encodeURIComponent('דלתות-אוטומטיות')}/${encodeURIComponent('דלת-אוטומטית-הזזה-דו-כנף')}`,
        destination: '/automatic-doors/double-leaf-door',
      },
      {
        source: `/${encodeURIComponent('דלתות-אוטומטיות')}/${encodeURIComponent('דלת-אוטומטית-הזזה-חד-כנף')}`,
        destination: '/automatic-doors/single-leaf-door',
      },
    ]
  },
  images: {
    domains: ['images.prismic.io', 's3-us-west-2.amazonaws.com'],
  },
  publicRuntimeConfig: {
    CLIENT_URL: process.env.NODE_ENV === "production" ? "https://peer-anfon-group.co.il" : "http://localhost:3000",
    SERVER_URL: process.env.NODE_ENV === "production" ? "https://peer-anfon.co.il/server" : "http://localhost:5000/server",
  },
  reactStrictMode: true
})