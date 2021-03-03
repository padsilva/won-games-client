import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Home from '.'

const props = {
  banners: bannersMock,
  newTitle: 'News',
  newGames: [gamesMock[0]],
  mostPopularTitle: 'Most Popular',
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingTitle: 'Upcoming',
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  freeTitle: 'Free Games',
  freeHighlight: highlightMock,
  freeGames: [gamesMock[0]]
}

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock BannerSlider"></div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    render(<Home {...props} />)

    expect(screen.getByTestId(/mock bannerslider/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(4)
  })
})
