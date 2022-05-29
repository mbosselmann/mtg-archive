import { NavLink } from 'react-router-dom'
import { StyledHeart } from './Heart.js'
import styled from 'styled-components'

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Search</StyledLink>
      <StyledLink to="/bookmarks">
        <StyledHeart />
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
  display: grid;
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
