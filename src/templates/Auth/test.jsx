import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // check if got the 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // check if got the heading
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i
      })
    ).toBeInTheDocument()

    // check if got the subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()

    // check if got the content title
    expect(
      screen.getByRole('heading', {
        name: /auth title/i
      })
    ).toBeInTheDocument()

    // check if children is rendering
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
