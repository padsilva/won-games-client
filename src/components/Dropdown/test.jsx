import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/test-utils'
import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>

    render(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render the title', () =>
    expect(screen.getByLabelText(/toogle dropdown/i)).toBeInTheDocument())

  it('should render handle open/close dropdown', () => {
    const content = screen.getByText(/content/i).parentElement

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(screen.getByLabelText(/toogle dropdown/i))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content.getAttribute('aria-hidden')).toBe('false')
  })

  it('should render handle open/close dropdown when clicking on overlay', () => {
    const content = screen.getByText(/content/i).parentElement
    const overlay = content.nextElementSibling

    userEvent.click(screen.getByLabelText(/toogle dropdown/i))

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay.getAttribute('aria-hidden')).toBe('false')

    userEvent.click(overlay)

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay.getAttribute('aria-hidden')).toBe('true')
  })
})
