import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export const Default = (args) => <CartIcon {...args} />

export const WithItems = (args) => <CartIcon {...args} />
WithItems.args = {
  quantity: 6
}
