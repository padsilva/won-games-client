import ExploreSidebar from '.'

import itemsMock from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: itemsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export const Default = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
)
