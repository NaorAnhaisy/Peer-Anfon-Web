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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
