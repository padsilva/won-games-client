import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    title: 'Click here',
    children: 'content'
  }
}

export const Default = (args) => <Dropdown {...args} />
