import Card from '../components/Card'
import styled from 'styled-components'
import ActionContainer from '../components/ActionContainer'
import Filter from '../components/Filter.js'
import { Text } from '../components/Text.js'
import { useState } from 'react'

export default function BookmarksPage({ savedCards }) {
  const [filteredCards, setFilteredCards] = useState(savedCards)

  function filterCards(color) {
    if (color === 'all') {
      return setFilteredCards(savedCards)
    }
    const filter = savedCards.filter(card => card.colors?.includes(color))
    setFilteredCards(filter.length > 0 ? filter : savedCards)
  }
  return (
    <>
      <Title>Bookmarked Cards</Title>
      <ActionContainer>
        <Filter filterCards={filterCards} />
      </ActionContainer>
      {filteredCards.length > 0 ? (
        <List role="list">
          {filteredCards.map(({ _id, name, image, colors, rarity, power }) => {
            if (image) {
              return (
                <Card
                  key={_id}
                  _id={_id}
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
