import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile
}

export const Default = (args) => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile {...args} />
  </div>
)
