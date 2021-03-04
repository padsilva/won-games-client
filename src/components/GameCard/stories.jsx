import GameCard from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 27.99,
    promotionalPrice: 19.99
  },
  argTypes: {
    onFav: {
      action: 'clicked'
    },
    ribbon: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export const Default = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const IsInCart = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
IsInCart.args = {
  isInCart: () => true
}

export const WithRibbon = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
