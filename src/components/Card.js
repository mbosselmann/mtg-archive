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
    <Article>
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
      <MoreButton type="button">More »</MoreButton>
    </Article>
  )
}

const Article = styled.li`
  list-style: none;
  box-shadow: 0 0 10px #ffb896;
  border-radius: 5px;
  margin: 40px 20px;
  display: flex;
  flex-direction: column;

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
  background-color: ${props => props.color || ''};
  ${props => props.color === 'White' && 'border: 1px solid #000'}
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
  background: #b8819c;
`
