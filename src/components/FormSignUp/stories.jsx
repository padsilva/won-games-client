import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
}

export const Default = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp {...args} />
  </div>
)
