import Wishlist from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const WishlistPage = (props) => <Wishlist {...props} />

export const getStaticProps = async () => ({
  props: {
    games: gamesMock,
    recommendedGames: gamesMock.slice(0, 4),
    recommendedHighlight: highlightMock
  }
})

export default WishlistPage
