import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
}

export const Default = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn {...args} />
  </div>
)
