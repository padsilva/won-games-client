import { useQueryGames } from 'graphql/queries/games'
import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { formatPrice } from 'utils/formatPrice'

import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '€0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
}

export const CartContext = createContext(CartContextDefaultValues)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const { data, loading } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems
      }
    }
  })

  const total = data?.games.reduce((acc, game) => acc + game.price, 0)

  const isInCart = (id) => (id ? cartItems.includes(id) : false)

  const saveCart = (cartItems) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id) => saveCart([...cartItems, id])

  const removeFromCart = (id) =>
    saveCart(cartItems.filter((itemId) => itemId !== id))

  const clearCart = () => saveCart([])

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
