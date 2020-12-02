import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import PropTypes from 'prop-types'

import * as S from './styles'

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor,
  ribbonSize
}) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  ribbon: PropTypes.node,
  ribbonColor: PropTypes.oneOf(['primary', 'secondary']),
  ribbonSize: PropTypes.oneOf(['normal', 'small'])
}

export default Banner
