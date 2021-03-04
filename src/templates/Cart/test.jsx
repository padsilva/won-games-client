import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'

import Cart from '.'

const props = {
  cards: cardsMock,
  recommendedTitle: 'Recommended',
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />
  }
}))

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />
  }
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    render(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Cart')).toHaveLength(2)
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })
})
