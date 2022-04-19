import Navigation from './Navigation'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Navigation', () => {
  it('renders a navigation with link for the home page, the search page and the bookmark page', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    )

    const homeLink = screen.getByRole('link', { name: /home/i })
    const searchLink = screen.getByRole('link', { name: /search/i })
    const bookmarkLink = screen.getByRole('link', { name: /bookmark/i })

    expect(homeLink).toBeInTheDocument()
    expect(searchLink).toBeInTheDocument()
    expect(bookmarkLink).toBeInTheDocument()
  })
})
