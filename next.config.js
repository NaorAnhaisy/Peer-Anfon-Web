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
        source: `/${encodeURIComponent('מערכות-אינטרקום')}`,
        destination: '/intercom',
      },
      {
        source: `/${encodeURIComponent('צור-קשר')}`,
        destination: '/contact-us',
      },
      {
        source: `/${encodeURIComponent('מעברים-מהירים')}`,
        destination: '/quick-access',
      },
      {
        source: `/${encodeURIComponent('אודותינו')}`,
        destination: '/about-us',
      },
      {
        source: `/${encodeURIComponent('המלצות')}`,
        destination: '/recommendations',
      },
      {
        source: `/${encodeURIComponent('מאמרים')}`,
        destination: '/articles',
      },
      {
        source: `/${encodeURIComponent('מאמרים')}/:${encodeURIComponent('articleID')}`,
        destination: '/articles/:articleID',
      },
      {
        source: `/${encodeURIComponent('פרוייקטים')}`,
        destination: '/projects',
      },
      {
        source: `/${encodeURIComponent('פרוייקטים')}/:${encodeURIComponent('projectID')}`,
        destination: '/projects/:projectID',
      },
      {
        source: `/${encodeURIComponent('גלריית-תמונות')}`,
        destination: '/gallery',
      },
      {
        source: `/${encodeURIComponent('מוצרים-חדשים')}`,
        destination: '/new-products',
      },
    ]
  },
  images: {
    domains: ['s3-us-west-2.amazonaws.com'],
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
          // {
          //   key: 'Content-Security-Policy',
          //   value: "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"
          //   // value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com/ vitals.vercel-insights.com"
          // }
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