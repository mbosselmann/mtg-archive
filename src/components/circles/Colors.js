import styled from 'styled-components'
import { css } from 'styled-components'
import { keyframes } from 'styled-components'

export default function Colors({ colors, component, filterCards }) {
  return (
    <ColorsContainer colors={colors}>
      {component === 'button' && (
        <Color
          color={'Mixed'}
          as={component}
          onClick={() => filterCards('all')}
        />
      )}
      {colors.map((color, index) => (
        <Color
          key={index}
          color={color}
          as={component}
          onClick={() => filterCards(color)}
        >
          <SrOnly>{color}</SrOnly>
        </Color>
      ))}
    </ColorsContainer>
  )
}

const ColorsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 20px;

  @media (max-width: 504px) {
    display: grid;
    grid-template-columns: 50px 50px 50px;
    place-items: center;
    gap: 10px;
  }
`

const colorMix = keyframes`
  0% {color: rgb(248, 231, 185)}
  20% { color: var(--red)}
  40% {color: var(--blue)}
  60% { color: var(--black) }
  80% {color: var(--green)}
  100% {color: rgb(248, 231, 185)}

`

const colorMixAnimation = css`
  animation: ${colorMix} 5s linear infinite;
`

const Color = styled.div`
  flex: 0 1 50px;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'Red' && 'background-color: var(--red)'};
  ${props => props.color === 'Blue' && 'background-color: var(--blue)'};
  ${props => props.color === 'Green' && 'background-color: var(--green)'};
  ${props => props.color === 'Black' && 'background-color: var(--black)'};
  ${props => props.color === 'Mixed' && colorMixAnimation};
  ${props => props.color === 'Mixed' && 'background-color: currentColor'};
`
const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`
