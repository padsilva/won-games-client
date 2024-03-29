import 'match-media.mock'
import { render, screen } from 'utils/test-utils'
import galleryMock from 'components/Gallery/mock'
import gameInfoMock from 'components/GameInfo/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Game from '.'

const props = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: '<h1>Custom HTML</h1>',
  details: gameDetailsMock,
  upcomingTitle: 'Upcoming',
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedTitle: 'Recommended',
  recommendedGames: gamesMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  // eslint-disable-next-line react/prop-types
  default: function Mock({ children }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu"></div>
  }
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery"></div>
  }
}))

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails"></div>
  }
}))

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo"></div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

describe('<Game />', () => {
  it('should render the template with components', () => {
    render(<Game {...props} />)

    expect(screen.getByTestId(/mock gallery/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock gamedetails/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock gameinfo/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    render(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId(/mock gallery/i)).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    render(<Game {...props} />)

    const gallery = screen.getByTestId(/mock gallery/i).parentElement

    expect(gallery).toHaveStyle({
      display: 'none'
    })

    expect(gallery).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })

  it('should render the cover image', () => {
    render(<Game {...props} />)

    const cover = screen.getByRole('img', {
      name: /Borderlands 3/i
    }).parentElement

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
