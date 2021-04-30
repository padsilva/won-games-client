import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import Wishlist from 'templates/Wishlist'
import protectedRoutes from 'utils/protectedRoutes'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

const WishlistPage = (props) => <Wishlist {...props} />

export const getServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  await apolloClient.query({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user.email
    }
  })

  const { data } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      initialApolloState: apolloClient.cache.extract(),
      recommendedTitle: data.recommended?.sections?.title,
      recommendedGames: gamesMapper(data.recommended?.sections?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.sections?.highlight
      )
    }
  }
}

export default WishlistPage
