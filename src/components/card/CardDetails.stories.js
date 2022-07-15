import CardDetails from './CardDetails.js'

export default {
  title: 'components/CardDetails',
  component: CardDetails,
}

const Template = args => <CardDetails {...args} />

export const WhiteCard = Template.bind({})
WhiteCard.args = {
  card: {
    name: 'Super Pig',
    originalType: 'Fluffy - the Super Pig',
    type: 'Fluffy Super Pig',
    types: ['Creature', 'Legendary'],
    subtypes: ['Pig', 'Fluffy', 'Legend'],
    image:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=10586&type=card',
    colors: ['White'],
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    rarity: 'Rare',
    power: '5',
  },
}
export const BlueCard = Template.bind({})
BlueCard.args = {
  card: {
    name: 'Super Pig',
    originalType: 'Fluffy - the Super Pig',
    type: 'Fluffy Super Pig',
    types: ['Creature', 'Legendary'],
    subtypes: ['Pig', 'Fluffy', 'Legend'],
    image:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=10586&type=card',
    colors: ['Blue'],
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    rarity: 'Rare',
    power: '5',
  },
}

export const GreenCard = Template.bind({})
GreenCard.args = {
  card: {
    name: 'Super Pig',
    originalType: 'Fluffy - the Super Pig',
    type: 'Fluffy Super Pig',
    types: ['Creature', 'Legendary'],
    subtypes: ['Pig', 'Fluffy', 'Legend'],
    image:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=10586&type=card',
    colors: ['Green'],
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    rarity: 'Rare',
    power: '5',
  },
}

export const RedCard = Template.bind({})
RedCard.args = {
  card: {
    name: 'Super Pig',
    originalType: 'Fluffy - the Super Pig',
    type: 'Fluffy Super Pig',
    types: ['Creature', 'Legendary'],
    subtypes: ['Pig', 'Fluffy', 'Legend'],
    image:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=10586&type=card',
    colors: ['Red'],
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    rarity: 'Rare',
    power: '5',
  },
}

export const BlackCard = Template.bind({})
BlackCard.args = {
  card: {
    name: 'Super Pig',
    originalType: 'Fluffy - the Super Pig',
    type: 'Fluffy Super Pig',
    types: ['Creature', 'Legendary'],
    subtypes: ['Pig', 'Fluffy', 'Legend'],
    image:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=10586&type=card',
    colors: ['Black'],
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    rarity: 'Rare',
    power: '5',
  },
}

export const MultipleColorsCard = Template.bind({})
MultipleColorsCard.args = {
  card: {
    name: 'Super Pig',
    originalType: 'Fluffy - the Super Pig',
    type: 'Fluffy Super Pig',
    types: ['Creature', 'Legendary'],
    subtypes: ['Pig', 'Fluffy', 'Legend'],
    image:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=10586&type=card',
    colors: ['Black', 'Green', 'Blue'],
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    rarity: 'Rare',
    power: '5',
  },
}
