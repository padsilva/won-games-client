import Home from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

const Index = (props) => <Home {...props} />

// getStaticProps => gera os estáticos em build time (tal como no gatsby)
// getServerSideProps => gera via SSR a cada request (nunca vai para o bundle do client, o bundle.js acaba por ficar menor)
// getInitialProps => gera via SSR a cada request (vai para o client, faz hydrate do lado do client depois do 1 request)
export const getServerSideProps = async () => {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query({
    query: QUERY_HOME,
    variables: {
      date: TODAY,
      limit: 8,
      price: 0
    }
  })

  return {
    props: {
      revalidate: 10,
      banners: bannerMapper(banners),
      newTitle: sections.newGames.title,
      newGames: gamesMapper(newGames),
      mostPopularTitle: sections.popularGames.title,
      mostPopularHighlight: highlightMapper(sections.popularGames.highlight),
      mostPopularGames: gamesMapper(sections.popularGames.games),
      upcomingTitle: sections.upcomingGames.title,
      upcomingHighlight: highlightMapper(sections.upcomingGames.highlight),
      upcomingGames: gamesMapper(upcomingGames),
      freeTitle: sections.freeGames.title,
      freeHighlight: highlightMapper(sections.freeGames.highlight),
      freeGames: gamesMapper(freeGames)
    }
  }
}

export default Index
