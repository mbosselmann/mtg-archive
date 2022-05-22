import styled from 'styled-components'
import { css } from 'styled-components'
import { keyframes } from 'styled-components'

export default function Colors({ colors, component, filterCards }) {
  return (
    <ColorsContainer>
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
  padding: 0 20px;
`

const colorMix = keyframes`
  0% {color: rgb(248, 231, 185)}
  20% { color: rgb(211, 32, 42)}
  40% {color: rgb(14, 104, 171)}
  60% { color: rgb(21, 11, 0) }
  80% {color: rgb(0, 115, 62)}
  100% {color: rgb(248, 231, 185)}

`

const colorMixAnimation = css`
  animation: ${colorMix} 5s linear infinite;
`

const Color = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'Red' && 'background-color: rgb(211, 32, 42)'};
  ${props => props.color === 'Blue' && 'background-color: rgb(14, 104, 171)'};
  ${props => props.color === 'Green' && 'background-color: rgb(0, 115, 62)'};
  ${props => props.color === 'Black' && 'background-color: rgb(21, 11, 0)'};
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
