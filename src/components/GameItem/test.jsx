import { render, screen } from 'utils/test-utils'
import GameItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: '59,99€'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    render(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /red dead redemption 2/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /red dead redemption 2/i })
    ).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/151x70'
    )

    expect(screen.getByText(/59,99€/i)).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    render(<GameItem {...props} downloadLink="https://link" />)

    expect(
      screen.getByRole('link', { name: /get red dead redemption 2 here/i })
    ).toHaveAttribute('href', 'https://link')
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: 'img/master-card.png',
      number: '**** **** **** 1234',
      purchaseDate: 'Purchase made on 18/12/2020 at 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
