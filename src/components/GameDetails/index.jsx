import PropTypes from 'prop-types'
import { Apple, Linux, Windows } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  publisher,
  rating,
  genres
}) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <S.Wrapper data-cy="game-details">
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {rating === 'free' ? 'FREE' : `${rating.replace('pegi', '')}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

GameDetails.propTypes = {
  developer: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.oneOf(['linux', 'mac', 'windows']))
    .isRequired,
  publisher: PropTypes.string.isRequired,
  rating: PropTypes.oneOf([
    'free',
    'pegi3',
    'pegi7',
    'pegi12',
    'pegi16',
    'pegi18'
  ]).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default GameDetails
