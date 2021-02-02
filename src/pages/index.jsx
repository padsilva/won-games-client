import Home from 'templates/Home'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'

const Index = (props) => <Home {...props} />

// getStaticProps => gera os estáticos em build time (tal como no gatsby)
// getServerSideProps => gera via SSR a cada request (nunca vai para o bundle do client, o bundle.js acaba por ficar menor)
// getInitialProps => gera via SSR a cada request (vai para o client, faz hydrate do lado do client depois do 1 request)
export const getServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_HOME,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 10,
      banners: data.banners.map((banner) => ({
        img: `http://localhost:1337${banner.image.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button.label,
        buttonLink: banner.button.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeHighlight: highlightMock,
      freeGames: gamesMock
    }
  }
}

export default Index
