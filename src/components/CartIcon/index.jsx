import PropTypes from 'prop-types'
import { ShoppingCart } from '@styled-icons/material-outlined'

import * as S from './styles'

const CartIcon = ({ quantity = 0 }) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
    <ShoppingCart aria-label="Shopping Cart" />
  </S.Wrapper>
)

CartIcon.propTypes = {
  quantity: PropTypes.number
}

export default CartIcon
