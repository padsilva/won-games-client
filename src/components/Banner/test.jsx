import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season</p>"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    )

    // verificar se o title está a ser renderizado
    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    // verificar se o subtitle está a ser renderizado
    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument()

    // verificar se a imagem está a ser renderizada
    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
