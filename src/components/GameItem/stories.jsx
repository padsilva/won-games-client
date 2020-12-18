import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: '59,99€'
  }
}

export const Default = (args) => <GameItem {...args} />

export const WithPayment = (args) => <GameItem {...args} />

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/123abc',
  paymentInfo: {
    flag: 'mastercard',
    img: 'img/master-card.png',
    number: '**** **** **** 1234',
    purchaseDate: 'Purchase made on 18/12/2020 at 20:32'
  }
}
