import { render, screen } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'
import CartList from '.'
import items from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: '€119.98'
    }
    const { container } = render(<CartList />, { cartProviderProps })
    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(/€119.98/i)).toHaveStyle({ color: '#F231A5' })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items
    }
    render(<CartList hasButton />, { cartProviderProps })
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
