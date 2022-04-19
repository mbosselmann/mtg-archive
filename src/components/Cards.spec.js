import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Card from './Card'

describe('Card', () => {
  it('renders a Card with basic information and a link for further details', () => {
    render(
      <MemoryRouter>
        <Card
          name={'Archbishop Oink'}
          image={
            'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card'
          }
          colors={['Red', 'Blue']}
          originalType={'Archbishop Oink'}
          subtypes={['Pig', 'Archbishop']}
          supertypes={['Legendary']}
          type={'Legendary Pig'}
          types={['Creature']}
        />
      </MemoryRouter>
    )

    const card = screen.getByRole('listitem')
    expect(card).toBeInTheDocument()

    const heading = screen.getByRole('heading', { name: 'Archbishop Oink' })
    expect(heading).toBeInTheDocument()

    const type = screen.getByText('Legendary Pig')
    expect(type).toBeInTheDocument()

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })
})
