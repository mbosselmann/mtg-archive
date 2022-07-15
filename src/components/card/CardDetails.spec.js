import CardDetails from './CardDetails.js'
import { render, screen } from '@testing-library/react'

describe('CardDetails', () => {
  it('renders all card details accordingly', () => {
    const testCard = {
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
    }

    render(<CardDetails card={testCard} />)

    const title = screen.getByText('Super Pig')
    const rarity = screen.getByText('Rare')
    const power = screen.getByText('5')
    const type = screen.getByText('Fluffy Super Pig')
    const typeCreature = screen.getByText('Creature')
    const typeLegendary = screen.getByText('Legendary')
    const subtypePig = screen.getByText('Pig')
    const subtypeFluffy = screen.getByText('Fluffy')
    const subtypeLegend = screen.getByText('Legend')
    const text = screen.getByText(
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
    )
    const image = screen.getByAltText('Image of card: Super Pig')

    expect(title).toBeInTheDocument()
    expect(rarity).toBeInTheDocument()
    expect(power).toBeInTheDocument()
    expect(type).toBeInTheDocument()
    expect(typeCreature).toBeInTheDocument()
    expect(typeLegendary).toBeInTheDocument()
    expect(subtypePig).toBeInTheDocument()
    expect(subtypeLegend).toBeInTheDocument()
    expect(subtypeFluffy).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=10586&type=card'
    )
  })
})
