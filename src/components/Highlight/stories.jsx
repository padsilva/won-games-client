import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: `Read Dead is back`,
    subtitle: `Come see John's new adventures`,
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  }
}

export const Default = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
