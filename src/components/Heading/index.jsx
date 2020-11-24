import PropTypes from 'prop-types'

import * as S from './styles'

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['white', 'black']),
  lineLeft: PropTypes.bool,
  lineBottom: PropTypes.bool
}

export default Heading
