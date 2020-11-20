import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Advanced React - Boilerplate</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-192.png" />
      <link rek="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="A simple project starter to work with JavaScript, React, Next.js and Styled Components"
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
