import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  // eslint-disable-next-line react/prop-types
  default: function Mock({ children }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />
  }
}))

describe('<Profile />', () => {
  it('should render sections', () => {
    render(<Profile>Lorem Ipsum</Profile>)
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
