import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'Email',
    labelFor: 'email',
    id: 'email',
    initialValue: '',
    placeholder: 'example@email.com',
    icon: <Email />
  },
  argTypes: {
    onInput: {
      action: 'changed'
    },
    icon: {
      type: ''
    }
  }
}

export const Default = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithError = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

WithError.args = {
  error: 'Ops... Something is wrong!'
}
