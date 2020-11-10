import PropTypes from 'prop-types'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Advanced React - Boilerplate</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-192.png" />
      <meta
        name="description"
        content="A simple project starter to work with JavaScript, React, Next.js and Styled Components"
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
