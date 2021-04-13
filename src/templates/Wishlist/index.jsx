import PropTypes from 'prop-types'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import Showcase from 'components/Showcase'
import Loader from 'components/Loader'
import { useWishlist } from 'hooks/use-wishlist'

import * as S from './styles'

const Wishlist = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length > 0 ? (
          <Grid>
            {items.map((game, index) => (
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
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

Wishlist.propTypes = {
  recommendedTitle: PropTypes.string.isRequired,
  recommendedGames: PropTypes.array.isRequired,
  recommendedHighlight: PropTypes.object.isRequired
}

export default Wishlist
