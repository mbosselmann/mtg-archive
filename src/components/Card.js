import styled from 'styled-components'
import Button from './Button'

export default function Card({
  name,
  text,
  image,
  colors,
  originalType,
  power,
  subtypes,
  supertypes,
  type,
  rarity,
  types,
}) {
  return (
    <Article color={colors ? colors[0] : ''}>
      {colors && (
        <ColorsContainer>
          {colors.map((color, index) => (
            <Color key={index} color={color}></Color>
          ))}
        </ColorsContainer>
      )}
      <h2>{name}</h2>
      <dl>
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
      </dl>
      <img src={image} alt="card" />
      <MoreButton type="button" color={colors ? colors[0] : ''}>
        More »
      </MoreButton>
    </Article>
  )
}

const Article = styled.li`
  list-style: none;
  box-shadow: 0 0 10px rgb(21, 11, 0);
  border-radius: 5px;
  margin: 40px 20px;
  display: flex;
  flex-direction: column;
  ${props =>
    props.color === 'White' && 'box-shadow: 0 0 10px rgb(166, 159, 157)'};
  ${props => props.color === 'Red' && 'box-shadow: 0 0 10px rgb(211, 32, 42)'};
  ${props =>
    props.color === 'Blue' && 'box-shadow: 0 0 10px rgb(14, 104, 171)'};
  ${props => props.color === 'Green' && 'box-shadow: 0 0 10px rgb(0, 115, 62)'};

  h2,
  dl,
  p {
    padding: 25px 20px 0 20px;
  }

  img {
    padding: 20px 30px;
  }
`
const ColorsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: -25px;
  margin-left: 20px;
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

const MoreButton = styled(Button)`
  border-radius: 0 0 5px 5px;
  font-weight: bold;
  font-size: 1.5rem;
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'White' && 'color: rgb(21, 11, 0)'};
  ${props => props.color === 'Red' && 'background-color: rgb(211, 32, 42)'};
  ${props => props.color === 'Blue' && 'background-color: rgb(14, 104, 171)'};
  ${props => props.color === 'Green' && 'background-color: rgb(0, 115, 62)'};
`
