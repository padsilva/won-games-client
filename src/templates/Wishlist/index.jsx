import PropTypes from 'prop-types'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import Showcase from 'components/Showcase'

const Wishlist = ({ games, recommendedGames, recommendedHighlight }) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.length > 0 ? (
        <Grid>
          {games.map((game, index) => (
            <GameCard {...game} favorite key={`wishlist-${index}`} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

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
