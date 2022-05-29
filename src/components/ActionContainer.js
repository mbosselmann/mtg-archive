import styled from 'styled-components'

export default function ActionContainer({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  background-color: #e2dcd5;
  text-transform: uppercase;
  font-weight: bold;

  a {
    flex: 1;
    padding: 8px;
    display: grid;
    place-items: center;
    text-decoration: none;
    color: #000;
  }
`
