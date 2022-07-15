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
        />
      </MemoryRouter>
    )

    const card = screen.getAllByRole('listitem')
    expect(card[0]).toBeInTheDocument()

    const heading = screen.getByRole('heading', { name: 'Archbishop Oink' })
    expect(heading).toBeInTheDocument()

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })
})
