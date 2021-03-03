import { render, screen } from 'utils/test-utils'
import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} hasLink />)

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

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render without link', () => {
    render(<Empty {...props} />)

    expect(
      screen.queryByRole('link', /go back to store/i)
    ).not.toBeInTheDocument()
  })
})
