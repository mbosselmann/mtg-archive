import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from './Colors'

export default function Card({ name, id, image, colors }) {
  return (
    <Article color={colors ? colors[0] : ''}>
      {colors && (
        <ColorsContainer>
          <Colors colors={colors} />
        </ColorsContainer>
      )}
      <h2>{name}</h2>
      <img src={image} alt="card" />
      <DetailsLink to={`/${id}`} color={colors ? colors[0] : ''}>
        More »
      </DetailsLink>
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
    padding: 20px 50px;
  }
`
const ColorsContainer = styled.div`
  margin-top: -25px;
`

const DetailsLink = styled(Link)`
  display: grid;
  place-items: center;
  text-decoration: none;
  color: #fff;
  padding: 8px;
  text-transform: uppercase;
  background-color: rgb(21, 11, 0);
  border-radius: 0 0 5px 5px;
  font-weight: bold;
  font-size: 1.5rem;
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'White' && 'color: rgb(21, 11, 0)'};
  ${props => props.color === 'Red' && 'background-color: rgb(211, 32, 42)'};
  ${props => props.color === 'Blue' && 'background-color: rgb(14, 104, 171)'};
  ${props => props.color === 'Green' && 'background-color: rgb(0, 115, 62)'};
`
