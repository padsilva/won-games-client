import { initializeApollo } from 'utils/apollo'
import GamesTemplate from 'templates/Games'
import itemsMock from 'components/ExploreSidebar/mock'
import { QUERY_GAMES } from 'graphql/queries/games'

const GamesPage = (props) => <GamesTemplate {...props} />

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'EUR'
        }).format(game.price)
      })),
      filterItems: itemsMock
    }
  }
}

export default GamesPage
