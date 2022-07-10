import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../circles/Colors'
import { Img } from '../styles/Image.js'

export default function Card({ name, _id, image, colors, rarity, power }) {
  const navigate = useNavigate()
  return (
    <Article
      color={colors ? colors[0] : ''}
      onClick={() => navigate(`/${_id}`)}
    >
      {colors && (
        <ColorsContainer>
          <Colors colors={colors} />
        </ColorsContainer>
      )}
      <h2>{name}</h2>
      <Img src={image} alt="card" />
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
  color: var(--text-color);
  list-style: none;
  border-radius: 5px;
  margin: 40px 20px;
  display: flex;
  flex-direction: column;

  @media (prefers-color-scheme: light) {
    box-shadow: 0 0 10px var(--black);
    ${props => props.color === 'White' && 'box-shadow: 0 0 10px var(--white)'};
    ${props => props.color === 'Red' && 'box-shadow: 0 0 10px var(--red)'};
    ${props => props.color === 'Blue' && 'box-shadow: 0 0 10px var(--blue)'};
    ${props => props.color === 'Green' && 'box-shadow: 0 0 10px var(--green)'};
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--secondary-color);
  }

  h2,
  dl,
  p {
    padding: 25px 20px 0 20px;
  }
`
const ColorsContainer = styled.div`
  margin-top: -35px;
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
