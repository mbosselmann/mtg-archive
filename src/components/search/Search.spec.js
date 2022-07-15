import Search from './Search'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Search', () => {
  it('renders one required input field with a search button', () => {
    render(<Search />)

    const input = screen.getByLabelText(/enter name of card/i)
    expect(input).toBeRequired()

    const button = screen.getByRole('button', { name: /search/i })
    expect(button).toBeInTheDocument()
  })

  it('submits form content after entering a search query', async () => {
    const getCard = jest.fn()

    render(<Search getCard={getCard} />)

    const input = screen.getByLabelText(/enter name of card/i)
    const button = screen.getByRole('button', { name: /search/i })
    await userEvent.type(input, 'Archangel')
    await userEvent.click(button)

    expect(getCard).toHaveBeenCalledWith('Archangel')
  })
})
