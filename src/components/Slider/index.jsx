import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import SlickSlider from 'react-slick'

import * as S from './styles'

const Slider = forwardRef(({ children, settings }, ref) => (
  <S.Wrapper>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </S.Wrapper>
))

Slider.displayName = 'Slider'

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object
}

export default Slider
