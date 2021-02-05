import gamesMock from 'components/GameCardSlider/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import Wishlist from 'templates/Wishlist'

const WishlistPage = (props) => <Wishlist {...props} />

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended.sections.title,
      recommendedGames: gamesMapper(data.recommended.sections.games),
      recommendedHighlight: highlightMapper(data.recommended.sections.highlight)
    }
  }
}

export default WishlistPage
