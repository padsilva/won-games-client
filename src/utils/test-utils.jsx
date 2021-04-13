import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'
import theme from 'styles/theme'
import {
  WishlistContext,
  WishlistContextDefaultValues
} from '../hooks/use-wishlist'

const customRender = (
  ui,
  {
    cartProviderProps = CartContextDefaultValues,
    wishlistProviderProps = WishlistContextDefaultValues,
    ...renderOptions
  } = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        <WishlistContext.Provider value={wishlistProviderProps}>
          {ui}
        </WishlistContext.Provider>
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
