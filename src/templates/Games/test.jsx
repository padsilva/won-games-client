import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import gamesMock from 'components/GameCardSlider/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ExploreSidebar"></div>
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<Games />', () => {
  it('should render sections', () => {
    renderWithTheme(
      <Games filterItems={filterItemsMock} games={[gamesMock[0]]} />
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
