import Button from 'components/Button'
import PropTypes from 'prop-types'

import * as S from './styles'

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  alignment = 'right',
  buttonLabel,
  buttonLink
}) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

Highlight.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  floatImage: PropTypes.string,
  alignment: PropTypes.oneOf(['right', 'left']),
  buttonLabel: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired
}

export default Highlight
