import 'session.mock'
import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Wishlist from '.'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

const props = {
  recommendedTitle: 'Recommended',
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  // eslint-disable-next-line react/prop-types
  default: function Mock({ children }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }
    render(<Wishlist {...props} />, { wishlistProviderProps })

    expect(
      screen.getByRole('heading', { name: 'Wishlist' })
    ).toBeInTheDocument()

    expect(screen.getByText(/population zero/i)).toBeInTheDocument()

    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: []
    }
    render(
      <Wishlist
        recommendedTitle="Recommended"
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />,
      { wishlistProviderProps }
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
