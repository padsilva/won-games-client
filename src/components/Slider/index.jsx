import PropTypes from 'prop-types'

import SlickSlider from 'react-slick'

import * as S from './styles'

const Slider = ({ children, settings }) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object
}
export default Slider
