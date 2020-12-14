import PropTypes from 'prop-types'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeHighlight,
  freeGames
}) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="New Releases" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Populars"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Coming Soon" games={upcomingGames} />
      <Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Free Games" highlight={freeHighlight} games={freeGames} />
  </Base>
)

Home.propTypes = {
  banners: PropTypes.array.isRequired,
  newGames: PropTypes.array.isRequired,
  mostPopularHighlight: PropTypes.object.isRequired,
  mostPopularGames: PropTypes.array.isRequired,
  upcomingGames: PropTypes.array.isRequired,
  upcomingHighlight: PropTypes.object.isRequired,
  upcomingMoreGames: PropTypes.array.isRequired,
  freeGames: PropTypes.array.isRequired,
  freeHighlight: PropTypes.object.isRequired
}

export default Home
