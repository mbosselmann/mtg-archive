import styled from 'styled-components'

export default styled.button`
  border: none;
  padding: 8px;
  background-color: var(--tertiary-color);
  border-radius: 8px;
  color: var(--text-color);
  text-transform: uppercase;

  @media (prefers-color-scheme: dark) {
    background-color: var(--highlight-color);
  }

  @media (prefers-color-scheme: light) {
    background-color: var(--black);
    color: var(--main-color);
  }
`
