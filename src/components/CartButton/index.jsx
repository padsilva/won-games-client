import PropTypes from 'prop-types'
import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { useCart } from 'hooks/use-cart'

const CartButton = ({ id }) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      size="small"
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    />
  )
}

CartButton.propTypes = {
  id: PropTypes.string.isRequired
}

export default CartButton
