import PropTypes from 'prop-types'

import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'

import * as S from './styles'

const Showcase = ({ title, highlight, games, color = 'white' }) => (
  <S.Wrapper data-cy={title || 'showcase'}>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

Showcase.propTypes = {
  title: PropTypes.string,
  highlight: PropTypes.object,
  games: PropTypes.array,
  color: PropTypes.oneOf(['black', 'white'])
}

export default Showcase
