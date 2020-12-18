import Cart from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const CartPage = (props) => <Cart {...props} />

export const getServerSideProps = async () => ({
  props: {
    items: itemsMock,
    total: '119,98€',
    cards: cardsMock,
    recommendedGames: gamesMock,
    recommendedHighlight: highlightMock
  }
})

export default CartPage
