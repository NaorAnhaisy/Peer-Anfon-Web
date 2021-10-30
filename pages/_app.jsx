import '../styles/globals.css';
import '../styles/navbarStyles.css';
import '../styles/custom-inputs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import "aos/dist/aos.css";
import AppLayout from '../components/AppLayout/AppLayout'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Head>
        <title>פאר אנפון - דלתות אוטומטיות, דלתות חשמליות אסתטיות ויוקרתיות</title>
        <meta name="description" content="פאר אנפון - החברה המובילה בישראל ליצור והתקנת דלתות אוטומטיות וחשמליות, מערכות אינטרקום, דלתות כניסה לבניין ותיבות דואר, אמרת דלתות כניסה לבניין? אמרת פאר אנפון" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
