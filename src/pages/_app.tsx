import { AppProvider } from 'context/Store'
import '../styles/tailwind.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
