import PropTypes from 'prop-types'

import Slider from 'components/Slider'
import * as S from './styles'
import Banner from 'components/Banner'

const settings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

BannerSlider.propTypes = {
  items: PropTypes.array.isRequired
}

export default BannerSlider
