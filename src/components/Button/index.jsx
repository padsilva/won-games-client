import PropTypes from 'prop-types'

import * as S from './styles'

const Button = ({
  children,
  size = 'medium',
  minimal = false,
  fullWidth = false,
  icon,
  ...props
}) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

Button.propTypes = {
  children: PropTypes.elementType,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  minimal: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.element,
  as: PropTypes.elementType
}

export default Button
