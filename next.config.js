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
      {
        source: `/${encodeURIComponent('תיבות-דואר')}`,
        destination: '/mailbox',
      },
      {
        source: `/${encodeURIComponent('תיבות-דואר')}/${encodeURIComponent('תיבות-דואר-לבתים-משותפים')}`,
        destination: '/mailbox/shared-houses',
      },
      {
        source: `/${encodeURIComponent('תיבות-דואר')}/${encodeURIComponent('תיבות-דואר-למוסדות')}`,
        destination: '/mailbox/organizations',
      },
      {
        source: `/${encodeURIComponent('תיבות-דואר')}/${encodeURIComponent('תיבות-דואר-לבתים-פרטיים')}`,
        destination: '/mailbox/private-houses',
      },
      {
        source: `/${encodeURIComponent('תיבות-דואר')}/${encodeURIComponent('חדרי-תיבות-דואר')}`,
        destination: '/mailbox/mailbox-rooms',
      },
      {
        source: `/${encodeURIComponent('תיבות-דואר')}/${encodeURIComponent('ארון-הפקדה-לטלפונים-סלולריים')}`,
        destination: '/mailbox/deposit-cellphones',
      },
      {
        source: `/${encodeURIComponent('דלתות-כניסה')}`,
        destination: '/enter-doors',
      },
      {
        source: `/${encodeURIComponent('דלתות-כניסה')}/${encodeURIComponent('דלתות-כניסה-אלומיניום')}`,
        destination: '/enter-doors/aluminium',
      },
      {
        source: `/${encodeURIComponent('דלתות-כניסה')}/${encodeURIComponent('דלתות-כניסה-זכוכית')}`,
        destination: '/enter-doors/glass',
      },
      {
        source: `/${encodeURIComponent('מערכות-אינטרקום')}`,
        destination: '/intercom',
      },
    ]
  },
  images: {
    domains: ['images.prismic.io', 's3-us-west-2.amazonaws.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: "script-src vitals.vercel-insights.com"
          }
        ],
      },
    ];
  },
  publicRuntimeConfig: {
    CLIENT_URL: process.env.NODE_ENV === "production" ? "https://peer-anfon-group.co.il" : "http://localhost:3000",
    SERVER_URL: process.env.NODE_ENV === "production" ? "https://peer-anfon.co.il/server" : "http://localhost:5000/server",
  },
  reactStrictMode: true
})