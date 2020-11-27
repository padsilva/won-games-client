import PropTypes from 'prop-types'

import * as S from './styles'

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

Button.propTypes = {
  children: PropTypes.elementType,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  icon: PropTypes.element,
  as: PropTypes.elementType
}

export default Button
