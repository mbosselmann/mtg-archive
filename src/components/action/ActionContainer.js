import styled from 'styled-components'

export default function ActionContainer({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  background-color: var(--secondary-color);
  text-transform: uppercase;
  font-weight: bold;
`
