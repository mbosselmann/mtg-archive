import { NavLink } from 'react-router-dom'
import { StyledHeart } from './Heart.js'
import { SearchIcon } from './SearchIcon.js'
import SrOnly from './SrOnly.js'
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
  background-color: #e2dcd5;
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
  color: #000;
  text-transform: uppercase;
  font-weight: bold;

  &.active {
    background-color: rgb(21, 11, 0);
    color: #fff;
  }
`
