import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const props = {
    ...pageProps,
    user: { name: 'dulyakit' }
  }

  return <Component {...props} />
}

export default MyApp
