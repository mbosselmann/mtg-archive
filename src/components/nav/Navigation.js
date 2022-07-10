import { NavLink } from 'react-router-dom'
import { StyledHeart } from '../icons/Heart.js'
import { SearchIcon } from '../icons/SearchIcon.js'
import SrOnly from '../styles/SrOnly.js'
import styled from 'styled-components'

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">
        <SearchIcon />
        <SrOnly>Search</SrOnly>
      </StyledLink>
      <StyledLink to="/bookmarks">
        <StyledHeart /> <SrOnly>Bookmarks</SrOnly>
      </StyledLink>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  background-color: var(--secondary-color);
  height: 4rem;
`

const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  gap: 20px;
  place-items: center;
  flex: 1;
  text-decoration: none;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: bold;

  &.active {
    background-color: var(--highlight-color);
    color: var(--text-color);
  }

  @media (prefers-color-scheme: light) {
    &.active {
      background-color: var(--black);
      color: var(--main-color);
    }
  }
`
