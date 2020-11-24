import Heading from '.'

export default {
  title: 'Heading',
  component: Heading
}

export const Basic = (args) => <Heading {...args} />

Basic.args = {
  children: 'Most Popular'
}
