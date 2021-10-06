import '../styles/globals.css';
import '../styles/navbarStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import "aos/dist/aos.css";
import AppLayout from '../components/AppLayout/AppLayout'

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
