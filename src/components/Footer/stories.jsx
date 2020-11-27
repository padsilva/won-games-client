import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
}

export const Default = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)
