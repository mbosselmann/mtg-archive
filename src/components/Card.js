import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Colors from './Colors'

export default function Card({ name, id, image, colors, rarity, power }) {
  const navigate = useNavigate()
  return (
    <Article color={colors ? colors[0] : ''} onClick={() => navigate(`/${id}`)}>
      {colors && (
        <ColorsContainer>
          <Colors colors={colors} />
        </ColorsContainer>
      )}
      <h2>{name}</h2>
      <img src={image} alt="card" />
      <List role="list">
        <li>
          <span>Rarity:</span> {rarity}
        </li>
        <li>
          <span>Power:</span> {power}
        </li>
      </List>
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

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px;

  span {
    font-weight: bold;
    margin-right: 10px;
  }
`
