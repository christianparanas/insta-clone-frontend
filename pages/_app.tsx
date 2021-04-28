import type { AppProps /*, AppContext */ } from 'next/app'

import '../styles/globals.scss'
// client
import '../styles/client/login.scss'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
