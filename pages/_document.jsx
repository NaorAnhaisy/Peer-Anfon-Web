/* eslint-disable @next/next/next-script-for-ga */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="he">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="apple-mobile-web-app-status-bar" content="#f7f7f5" />
                    <meta name="theme-color" content="#f7f7f5" />
                    <meta name="google-site-verification" content="jiVPxmLb8UJ1kJZBlhr4vjkO3AWneWeEYZnZ9j9upUE" />
                    <meta property="og:locale" content="he_IL" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות" />
                    <meta property="og:description" content="פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון" />
                    <meta property="og:url" content="https://peer-anfon-group.co.il/" />
                    <meta property="og:site_name" content="פאר אנפון" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות" />
                    <meta name="twitter:description" content="פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/example.png" />
                    <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
                    <link rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
                    <link rel="canonical" href="https://peer-anfon-group.co.il/" />

                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-GGLJL2SHN4"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'GGLJL2SHN4', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;