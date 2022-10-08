/* eslint-disable @next/next/next-script-for-ga */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="he">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="description" key="desc" content="פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון" />
                    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
                    <meta name="apple-mobile-web-app-status-bar" content="#f7f7f5" />
                    <meta name="theme-color" content="#f7f7f5" />
                    <meta name="google-site-verification" content="jiVPxmLb8UJ1kJZBlhr4vjkO3AWneWeEYZnZ9j9upUE" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות" />
                    <meta name="twitter:description" content="פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון" />
                    <meta property="og:locale" content="he_IL" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות" />
                    <meta property="og:description" content="פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון" />
                    <meta property="og:url" content="https://peer-anfon-group.co.il/" />
                    <meta property="og:site_name" content="פאר אנפון" />
                    <meta property="og:image" itemProp="image" content="https://peer-anfon-group.co.il/images/favicon.png" />

                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" href="/images/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />

                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
                    <link rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

                    {/* <link rel="alternate" type="application/rss+xml" title="פאר אנפון &laquo; פיד‏" href="https://peer-anfon-group.co.il/feed/" />
                    <link rel="alternate" type="application/rss+xml" title="פאר אנפון &laquo; פיד תגובות‏" href="https://8peer.co.il/comments/feed/" />
                    <link rel="alternate" type="application/rss+xml" title="פאר אנפון &laquo; פיד תגובות של דף בית" href="https://8peer.co.il/%d7%93%d7%a3-%d7%91%d7%99%d7%aa/feed/" /> */}

                    {/* Tidio Chat */}
                    <script async
                        src="//code.tidio.co/uudo74wlnrqvznjkih7hv49zx6tz55pw.js" />

                    {/* Accessbility */}
                    <script async
                        src="https://cdn.enable.co.il/licenses/enable-L10108j65axynpdc-1121-24966/init.js"></script>

                    {/* Structered Data - Json ld */}
                    <script async type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": [
                                        "Store",
                                        "Organization"
                                    ],
                                    "@id": "https://peer-anfon-group.co.il/#organization",
                                    "name": "פאר אנפון - דלתות חשמליות, אוטומטיות ותיבות דואר",
                                    "url": "https://peer-anfon-group.co.il",
                                    "email": "info@8peer.co.il",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "הסדנא 13, חולון",
                                        "addressRegion": "חולון",
                                        "postalCode": "5881407",
                                        "addressCountry": "ישראל"
                                    },
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://peer-anfon-group.co.il/images/company-logo/colored-logo.png"
                                    },
                                    "priceRange": "$$$$",
                                    "openingHours": [
                                        "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00"
                                    ],
                                    "image": {
                                        "@type": "ImageObject",
                                        "url": "https://peer-anfon-group.co.il/images/company-logo/colored-logo.png"
                                    },
                                    "telephone": "072-371-2701"
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "https://peer-anfon-group.co.il/#website",
                                    "url": "https://peer-anfon-group.co.il",
                                    "name": "פאר אנפון תעשיות בע\"מ",
                                    "publisher": {
                                        "@id": "https://peer-anfon-group.co.il/#organization"
                                    },
                                    "inLanguage": "he-IL"
                                },
                                {
                                    "@type": "ImageObject",
                                    "@id": "https://peer-anfon-group.co.il/#primaryImage",
                                    "url": "https://peer-anfon-group.co.il/images/backgrounds/home.jpg",
                                    "width": 200,
                                    "height": 200
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://peer-anfon-group.co.il/#webpage",
                                    "url": "https://peer-anfon-group.co.il/",
                                    "name": "פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות",
                                    "datePublished": "2015-01-08T08:52:20+00:00",
                                    "dateModified": "2021-12-12T08:52:20+00:00",
                                    "isPartOf": {
                                        "@id": "https://peer-anfon-group.co.il/#website"
                                    },
                                    "primaryImageOfPage": {
                                        "@id": "https://peer-anfon-group.co.il/#primaryImage"
                                    },
                                    "inLanguage": "he-IL"
                                },
                                {
                                    "@type": "Article",
                                    "headline": "פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות",
                                    "datePublished": "2015-01-08T08:52:20+00:00",
                                    "dateModified": "2021-12-12T08:52:20+00:00",
                                    "url": "https://peer-anfon-group.co.il",
                                    "author": {
                                        "@type": "Person",
                                        "name": "admin",
                                        "url": "https://peer-anfon-group.co.il/about-us/"
                                    },
                                    "publisher": {
                                        "@id": "https://peer-anfon-group.co.il/#organization"
                                    },
                                    "description": "פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון",
                                    "@id": "https://peer-anfon-group.co.il/#richSnippet",
                                    "isPartOf": {
                                        "@id": "https://peer-anfon-group.co.il/#webpage"
                                    },
                                    "image": {
                                        "@id": "https://peer-anfon-group.co.il/#primaryImage"
                                    },
                                    "inLanguage": "he-IL",
                                    "mainEntityOfPage": {
                                        "@id": "https://peer-anfon-group.co.il/#webpage"
                                    }
                                }]
                        })
                    }}
                    />

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
                                gtag('config', 'G-GGLJL2SHN4', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />

                    {/* Google Tag Manager */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-5VVSQD8');
                            `,
                        }}
                    />
                    {/* End Google Tag Manager */}

                </Head>
                <body>
                    {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript dangerouslySetInnerHTML={{
                        __html: `
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VVSQD8"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>
                        `
                    }}></noscript>
                    {/* <!-- End Google Tag Manager (noscript) --> */}

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;