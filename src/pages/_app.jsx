import PropTypes from 'prop-types'
import Head from 'next/head'
import { Provider as AuthProvider } from 'next-auth/client'
import NextNprogress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'
import { CartProvider } from 'hooks/use-cart'
import { WishlistProvider } from 'hooks/use-wishlist'

const App = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <WishlistProvider>
            <CartProvider>
              <Head>
                <title>Won Games</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-192.png" />
                <link rek="manifest" href="/manifest.json" />
                <meta
                  name="description"
                  content="The best game store in the world!"
                />
              </Head>
              <GlobalStyles />
              <NextNprogress
                color={theme.colors.primary}
                startPosition={0.3}
                stopDelayMs={200}
                height={5}
              />
              <Component {...pageProps} />
            </CartProvider>
          </WishlistProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
