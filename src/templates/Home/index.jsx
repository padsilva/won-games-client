import PropTypes from 'prop-types'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

const Home = ({
  banners,
  newTitle,
  newGames,
  mostPopularTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcomingTitle,
  upcomingHighlight,
  upcomingGames,
  freeTitle,
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
      <Showcase title={newTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingTitle}
      games={upcomingGames}
      highlight={upcomingHighlight}
    />

    <Showcase title={freeTitle} highlight={freeHighlight} games={freeGames} />
  </Base>
)

Home.propTypes = {
  banners: PropTypes.array.isRequired,
  newTitle: PropTypes.string.isRequired,
  newGames: PropTypes.array.isRequired,
  mostPopularTitle: PropTypes.string.isRequired,
  mostPopularHighlight: PropTypes.object.isRequired,
  mostPopularGames: PropTypes.array.isRequired,
  upcomingTitle: PropTypes.string.isRequired,
  upcomingHighlight: PropTypes.object.isRequired,
  upcomingGames: PropTypes.array.isRequired,
  freeTitle: PropTypes.string.isRequired,
  freeHighlight: PropTypes.object.isRequired,
  freeGames: PropTypes.array.isRequired
}

export default Home
