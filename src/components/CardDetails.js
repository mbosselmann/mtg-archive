import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function CardDetails({ onFindCard, card }) {
  const { id } = useParams()
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
  } = card
  console.log(id)

  useEffect(() => {
    onFindCard(id)
  }, [])

  return (
    <Container color={colors ? colors[0] : ''}>
      <ActionContainer>
        <BackLink to="/">Back to Search Results</BackLink>
        <button>Save</button>
      </ActionContainer>
      <Img src={image} alt="Card" />
      <Wrapper>
        <Title>{name}</Title>
        {colors && (
          <ColorsContainer>
            {colors.map((color, index) => (
              <Color key={index} color={color}></Color>
            ))}
          </ColorsContainer>
        )}
        <SubTitle color={colors ? colors[0] : ''}>
          About all Kinds of Types:
        </SubTitle>
        <List>
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
        </List>
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
  ${props => props.color === 'Black' && 'background-color: rgb(166, 159, 157)'};
`

const ActionContainer = styled.div`
  display: flex;
  background-color: #fff;

  button {
    flex: 1;
    border: none;
    padding: 8px;
  }
`

const BackLink = styled(Link)`
  flex: 1;
  padding: 8px;
  display: grid;
  place-items: center;
  text-decoration: none;
  color: #000;
`

const Title = styled.h2`
  background-color: #fff;
`

const SubTitle = styled.h3`
  padding: 8px 20px;
  color: #fff;
  background-color: rgb(21, 11, 0);
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'Red' && 'background-color: rgb(211, 32, 42)'};
  ${props => props.color === 'Blue' && 'background-color: rgb(14, 104, 171)'};
  ${props => props.color === 'Green' && 'background-color: rgb(0, 115, 62)'};
`
const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  gap: 20px;
  flex-direction: column;
`
const List = styled.dl`
  background-color: #fff;
  padding: 20px;
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 20px;
  align-items: flex-start;
`

const Img = styled.img`
  display: block;
  padding: 30px 60px;
`

const Term = styled.dt`
  font-weight: bold;
  width: 100%;
`

const ColorsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 20px;
`

const Color = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'Red' && 'background-color: rgb(211, 32, 42)'};
  ${props => props.color === 'Blue' && 'background-color: rgb(14, 104, 171)'};
  ${props => props.color === 'Green' && 'background-color: rgb(0, 115, 62)'};
  ${props => props.color === 'Black' && 'background-color: rgb(21, 11, 0)'};
`
