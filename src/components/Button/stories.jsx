import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
}

export const Default = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}

export const WithIcon = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}

export const asLink = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: 'a',
  href: '/link'
}
