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

  it("won't submit form if input field is left empty", () => {
    const getCard = jest.fn()

    render(<Search getCard={getCard} />)

    const button = screen.getByRole('button', { name: /search/i })
    userEvent.click(button)

    expect(getCard).not.toHaveBeenCalledTimes(1)
  })

  it('submits form if input field is filled out', async () => {
    const getCard = jest.fn()

    render(<Search getCard={getCard} />)

    const input = screen.getByLabelText(/enter name of card/i)
    const button = screen.getByRole('button', { name: /search/i })
    await userEvent.type(input, 'Archangel')
    await userEvent.click(button)

    expect(getCard).toHaveBeenCalledWith('Archangel')
  })
})
