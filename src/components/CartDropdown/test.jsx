import { render, screen } from 'utils/test-utils'
import mockItems from 'components/CartList/mock'
import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    render(<CartDropdown items={mockItems} total="119,98€" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${mockItems.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    render(<CartDropdown items={mockItems} total="119,98€" />)

    expect(screen.getByText(/119,98€/i)).toBeInTheDocument()
    expect(screen.getByText(/borderlands 3/i)).toBeInTheDocument()
  })
})
