import CartList from '.'

import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export const Default = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
Default.args = {
  total: '€119.98',
  cartContextValue: {
    items
  }
}

export const WithButton = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)
WithButton.args = {
  total: '€119.98',
  cartContextValue: {
    items
  }
}

export const Empty = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
