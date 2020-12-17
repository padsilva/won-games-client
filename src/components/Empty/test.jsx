import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing a videogame/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /a simple title/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(screen.getByRole('link', /go back to store/i)).toHaveAttribute(
      'href',
      '/'
    )
  })

  it('should render without link', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', /go back to store/i)
    ).not.toBeInTheDocument()
  })
})
