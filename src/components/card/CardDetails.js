import styled from 'styled-components'
import Colors from '../circles/Colors'
import { Img } from '../styles/Image.js'

export default function CardDetails({ card }) {
  const {
    name,
    originalType,
    type,
    types,
    subtypes,
    supertypes,
    image,
    colors,
    text,
    rarity,
    power,
  } = card

  return (
    <Container color={colors ? colors[0] : ''}>
      <Img src={image} alt="Card" />
      <Wrapper>
        <Title>{name}</Title>
        {colors && <Colors colors={colors} />}
        <List role="list">
          <li>
            <span>Rarity:</span> {rarity}
          </li>
          <li>
            <span>Power:</span> {power}
          </li>
        </List>
        <SubTitle color={colors ? colors[0] : ''}>
          About all Kinds of Types:
        </SubTitle>
        <DescriptionList>
          <Flex>
            <Term>Type:</Term>
            <dd>{type}</dd>
          </Flex>
          <Flex>
            <Term>Original Type:</Term>
            <dd>{originalType}</dd>
          </Flex>
          {types && (
            <Flex>
              <Term>Types:</Term>
              {types.map((type, index) => (
                <dd key={index}>{type}</dd>
              ))}
            </Flex>
          )}
          {subtypes && (
            <Flex>
              <Term>Subtypes:</Term>
              {subtypes.map((subtype, index) => (
                <dd key={index}>{subtype}</dd>
              ))}
            </Flex>
          )}
          {supertypes && (
            <Flex>
              <Term>Supertypes:</Term>
              {supertypes?.map((supertype, index) => (
                <dd key={index}>{supertype}</dd>
              ))}
            </Flex>
          )}
        </DescriptionList>
        <SubTitle color={colors ? colors[0] : ''}>Description:</SubTitle>
        <p>{text}</p>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ${props => props.color === 'White' && 'background-color: rgb(249, 250, 244)'};
  ${props => props.color === 'Red' && 'background-color: rgb(235, 159, 130)'};
  ${props => props.color === 'Blue' && 'background-color: rgb(179, 206, 234)'};
  ${props => props.color === 'Green' && 'background-color: rgb(196, 211, 202)'};
  ${props => props.color === 'Black' && 'background-color: var(--white)'};
`

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  gap: 20px;
  flex-direction: column;

  p {
    padding: 8px 20px 20px;
  }
`

const Title = styled.h2`
  padding: 8px 20px;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  span {
    font-weight: bold;
    margin-right: 10px;
  }
`

const SubTitle = styled.h3`
  padding: 8px 20px;
  color: #fff;
  background-color: var(--black);
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'White' && 'color: var(--black)'};
  ${props => props.color === 'Red' && 'background-color: var(--red)'};
  ${props => props.color === 'Blue' && 'background-color: var(--blue)'};
  ${props => props.color === 'Green' && 'background-color: var(--green)'};
`

const DescriptionList = styled.dl`
  background-color: #fff;
  padding: 8px 20px;
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 20px;
  align-items: flex-start;
`

const Term = styled.dt`
  font-weight: bold;
  width: 100%;
`
