import PropTypes from 'prop-types'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'
import Showcase from 'components/Showcase'

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
  <section>
    <Container>
      <Menu />
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

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
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
