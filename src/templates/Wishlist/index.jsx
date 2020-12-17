import PropTypes from 'prop-types'

import Base from 'templates/Base'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import GameCard from 'components/GameCard'

import * as S from './styles'

const Wishlist = ({ games, recommendedGames, recommendedHighlight }) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
      {games?.map((game, index) => (
        <GameCard {...game} favorite key={`wishlist-${index}`} />
      ))}
    </Container>

    <Showcase
      title="Recommended"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

Wishlist.propTypes = {
  games: PropTypes.array,
  recommendedGames: PropTypes.array.isRequired,
  recommendedHighlight: PropTypes.object.isRequired
}

export default Wishlist
