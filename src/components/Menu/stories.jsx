import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
}

export const Default = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
