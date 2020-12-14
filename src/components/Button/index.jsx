import PropTypes from 'prop-types'
import { forwardRef } from 'react'

import * as S from './styles'

const Button = forwardRef(
  (
    {
      children,
      size = 'medium',
      minimal = false,
      fullWidth = false,
      icon,
      ...props
    },
    ref
  ) => (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ref={ref}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
)

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.elementType,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  minimal: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.element,
  as: PropTypes.elementType
}

export default Button
