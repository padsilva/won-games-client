import Cart from 'templates/Cart'

import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protectedRoutes'

const CartPage = (props) => <Cart {...props} />

export const getServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      recommendedTitle: data.recommended.sections.title,
      recommendedGames: gamesMapper(data.recommended.sections.games),
      recommendedHighlight: highlightMapper(data.recommended.sections.highlight)
    }
  }
}

export default CartPage
