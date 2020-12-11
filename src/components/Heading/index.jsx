import PropTypes from 'prop-types'

import * as S from './styles'

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['white', 'black']),
  lineLeft: PropTypes.bool,
  lineBottom: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'huge']),
  lineColor: PropTypes.oneOf(['primary', 'secondary'])
}

export default Heading
