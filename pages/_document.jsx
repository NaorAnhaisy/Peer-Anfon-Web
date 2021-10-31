// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="he">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#f7f7f5" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/example.png" />
                    <meta name="apple-mobile-web-app-status-bar" content="#f7f7f5" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
                    <link rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
                    <link rel="canonical" href="https://peer-anfon-group.co.il/" />
                    <meta property="og:locale" content="he_IL" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות" />
                    <meta property="og:description" content="פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון" />
                    <meta property="og:url" content="https://peer-anfon-group.co.il/" />
                    <meta property="og:site_name" content="פאר אנפון" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות" />
                    <meta name="twitter:description" content="פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון" />
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