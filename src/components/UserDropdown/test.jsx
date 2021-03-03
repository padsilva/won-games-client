import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/test-utils'
import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Paulo" />)

    expect(screen.getByText(/paulo/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Paulo" />)

    userEvent.click(screen.getByText(/paulo/i))

    expect(screen.getByRole('link', { name: /profile/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
