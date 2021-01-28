import PropTypes from 'prop-types'

import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'

import * as S from './styles'

const Showcase = ({ title, highlight, games }) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.Wrapper>
)

Showcase.propTypes = {
  title: PropTypes.string,
  highlight: PropTypes.object,
  games: PropTypes.array
}

export default Showcase
