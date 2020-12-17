import PropTypes from 'prop-types'

import Base from 'templates/Base'
import Heading from 'components/Heading'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import GameCard from 'components/GameCard'

const Wishlist = ({ games, recommendedGames, recommendedHighlight }) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard {...game} favorite key={`wishlist-${index}`} />
        ))}
      </Grid>

      <Divider />
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
