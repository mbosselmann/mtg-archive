import Card from '../components/Card'
import styled from 'styled-components'
import ActionContainer from '../components/ActionContainer'
import { Link } from 'react-router-dom'

export default function BookmarksPage({ savedCards }) {
  return (
    <>
      <Title>Bookmarked Cards</Title>
      <ActionContainer>
        <Link to="/">Back to Search Results</Link>
      </ActionContainer>
      {savedCards.length > 0 ? (
        <List role="list">
          {savedCards.map(({ id, name, image, colors, rarity, power }) => {
            if (image) {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  colors={colors}
                  rarity={rarity}
                  power={power}
                />
              )
            }
          })}
        </List>
      ) : (
        <Text>No saved cards yet. :(</Text>
      )}
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  background-color: rgb(21, 11, 0);
  color: #fff;
`

const List = styled.ul`
  padding-left: 0;
  overflow-y: scroll;
`
const Text = styled.p`
  margin-top: 2rem;
  padding: 20px;
`
