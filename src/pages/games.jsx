import GamesTemplate from 'templates/Games'

import itemsMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

const GamesPage = (props) => <GamesTemplate {...props} />

export const getServerSideProps = async () => ({
  props: {
    games: gamesMock,
    filterItems: itemsMock
  }
})

export default GamesPage
