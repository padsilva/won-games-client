import PropTypes from 'prop-types'

import * as S from './styles'

const Ribbon = ({ children, color = 'primary', size = 'normal' }) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

Ribbon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['normal', 'small'])
}

export default Ribbon
