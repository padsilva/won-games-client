import Radio from '.'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
}

export const Default = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Action"
        labelFor="action"
        id="action"
        value="action"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Adventure"
        labelFor="adventure"
        id="adventure"
        value="adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Strategy"
        labelFor="strategy"
        id="strategy"
        value="strategy"
        {...args}
      />
    </div>
  </>
)
