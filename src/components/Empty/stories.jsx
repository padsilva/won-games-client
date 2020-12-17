import Empty from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export const Default = (args) => <Empty {...args} />

Default.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here.',
  hasLink: true
}
