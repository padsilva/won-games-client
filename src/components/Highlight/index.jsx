import Button from 'components/Button'
import Image from 'next/image'
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
  <S.Wrapper alignment={alignment}>
    <Image src={backgroundImage} alt={`${title} background`} layout="fill" />

    {!!floatImage && (
      <S.FloatImageWrapper>
        <Image src={floatImage} alt={title} width={400} height={300} />
      </S.FloatImageWrapper>
    )}

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
