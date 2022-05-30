import Colors from './Colors'

export default {
  title: 'components/Colors',
  component: Colors,
}

const Template = args => <Colors {...args} />

export const Default = Template.bind({})

Default.args = {
  colors: ['White', 'Red', 'Blue', 'Green', 'Black'],
}
