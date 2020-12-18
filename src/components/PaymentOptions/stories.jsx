import PaymentOptions from '.'

import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      type: ''
    },
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export const Default = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
