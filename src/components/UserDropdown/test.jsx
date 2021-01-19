import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Paulo" />)

    expect(screen.getByText(/paulo/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Paulo" />)

    userEvent.click(screen.getByText(/paulo/i))

    expect(screen.getByRole('link', { name: /profile/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
