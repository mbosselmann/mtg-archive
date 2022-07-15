import Colors from './Colors'

export default {
  title: 'components/Colors',
  component: Colors,
}

const Template = args => <Colors {...args} />

export const ColorButtons = Template.bind({})
ColorButtons.args = {
  component: 'button',
  colors: ['White', 'Red', 'Blue', 'Green', 'Black'],
}

export const ColorCircles = Template.bind({})
ColorCircles.args = {
  component: 'div',
  colors: ['White', 'Red', 'Blue', 'Green', 'Black'],
}
