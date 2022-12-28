import '../styles/globals.css'
import '../styles/sidebar.css'
import '../styles/header.css'
import '../styles/dashboard/dashboard-info.css'
import '../styles/dashboard/list-header.css'
import '../styles/dashboard/souls-list.css'
import '../styles/list-footer.css'
import "../styles/souls/souls-header.css"
import "../styles/souls/souls-souls-list.css"
import "../styles/modules/modules.css"
import "../styles/jurisdictions/jurisdictions.css"
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
