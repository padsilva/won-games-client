import { render, screen } from 'utils/test-utils'

import mockItems from './mock'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = render(<CartList items={mockItems} total="119,98€" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(/119,98€/i)).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    render(<CartList items={mockItems} total="119,98€" hasButton />)

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()

    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
