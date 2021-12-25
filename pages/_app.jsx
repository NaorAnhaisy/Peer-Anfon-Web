import { SSRProvider } from '@react-aria/ssr';
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from "aos";
import AppLayout from '../components/AppLayout/AppLayout'
import '../styles/globals.css';
import '../styles/navbarStyles.css';
import '../styles/custom-inputs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import "aos/dist/aos.css";
import 'react-medium-image-zoom/dist/styles.css'
import '../styles/izmir.min.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener('load', AOS.refresh)
  }, []);

  return (
    <SSRProvider>
      <AppLayout>
        <Head>
          <title>פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות</title>
          <meta name="description" key="desc" content="פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </AppLayout>
    </SSRProvider>
  )
}

export default MyApp
