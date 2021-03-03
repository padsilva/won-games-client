import { render, screen } from 'utils/test-utils'
import Highlight from '.'
import * as S from './styles'
import item from './mock'

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    render(<Highlight {...item} />)

    expect(
      screen.getByRole('heading', { name: /read dead is back/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /come see john's new adventures/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = render(<Highlight {...item} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${item.backgroundImage})`
    })
  })

  it('should render float image', () => {
    render(<Highlight {...item} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: item.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = render(<Highlight {...item} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left', () => {
    const { container } = render(<Highlight {...item} alignment="left" />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
