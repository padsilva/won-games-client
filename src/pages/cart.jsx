import Cart from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

const CartPage = (props) => <Cart {...props} />

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      items: itemsMock,
      total: '119,98€',
      cards: cardsMock,
      recommendedTitle: data.recommended.sections.title,
      recommendedGames: gamesMapper(data.recommended.sections.games),
      recommendedHighlight: highlightMapper(data.recommended.sections.highlight)
    }
  }
}

export default CartPage
