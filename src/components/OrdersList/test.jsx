import { render, screen } from 'utils/test-utils'
import OrdersList from '.'
import itemsMock from './mock'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameItem"></div>
  }
}))

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    render(<OrdersList items={itemsMock} />)

    expect(screen.getByRole('heading', { name: /orders/i })).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render empty state', () => {
    render(<OrdersList />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
