import Header from '../components/Header'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
    <Header />
    <Component {...pageProps} />
    </div>

  )
}

export default MyApp
