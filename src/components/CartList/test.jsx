import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="119,98€" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(/119,98€/i)).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} total="119,98€" hasButton />)

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })
})
