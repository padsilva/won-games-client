import { initializeApollo } from 'utils/apollo'
import GamesTemplate from 'templates/Games'
import itemsMock from 'components/ExploreSidebar/mock'
import { QUERY_GAMES } from 'graphql/queries/games'

const GamesPage = (props) => <GamesTemplate {...props} />

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: itemsMock
    }
  }
}

export default GamesPage
