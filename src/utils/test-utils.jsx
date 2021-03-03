import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { CartContext } from 'hooks/use-cart'
import theme from 'styles/theme'

const customRender = (ui, { cartProviderProps, ...renderOptions } = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        {ui}
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
