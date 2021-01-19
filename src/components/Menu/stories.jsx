import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export const Default = (args) => <Menu {...args} />

export const Logged = (args) => <Menu {...args} />
Logged.args = {
  username: 'Paulo Silva'
}
