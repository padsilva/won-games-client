import PropTypes from 'prop-types'

import Base from 'templates/Base'
import GameInfo from 'components/GameInfo'
import Gallery from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails from 'components/GameDetails'
import Showcase from 'components/Showcase'

import * as S from './styles'
import { Divider } from 'components/Divider'

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="Recommended" games={recommendedGames} />
    </S.Main>
  </Base>
)

Game.propTypes = {
  cover: PropTypes.string.isRequired,
  gameInfo: PropTypes.object.isRequired,
  gallery: PropTypes.array,
  description: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  upcomingGames: PropTypes.array.isRequired,
  upcomingHighlight: PropTypes.object.isRequired,
  recommendedGames: PropTypes.array.isRequired
}

export default Game