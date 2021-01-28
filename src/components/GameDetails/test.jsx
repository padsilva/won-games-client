import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails from '.'
import mockGame from './mock'

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...mockGame} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...mockGame} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...mockGame} />)

    expect(screen.getByText(/different tales/i)).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...mockGame} />)

    expect(screen.getByText(/nov 21, 2020/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...mockGame} />)

    expect(screen.getByText(/walkabout/i)).toBeInTheDocument()
  })

  it('should render free rating when free', () => {
    renderWithTheme(<GameDetails {...mockGame} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 16+ rating when pegi16', () => {
    renderWithTheme(<GameDetails {...mockGame} rating="pegi16" />)

    expect(screen.getByText(/16\+/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when pegi18', () => {
    renderWithTheme(<GameDetails {...mockGame} rating="pegi18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...mockGame} />)

    expect(screen.getByText(/role-playing \/ narrative/i)).toBeInTheDocument()
  })
})
