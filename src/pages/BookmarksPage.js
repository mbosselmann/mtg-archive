import Card from '../components/card/Card'
import styled from 'styled-components'
import ActionContainer from '../components/action/ActionContainer'
import Filter from '../components/filter/Filter.js'
import Button from '../components/styles/Button.js'
import { Text } from '../components/styles/Text.js'
import { useState } from 'react'
import { useEffect } from 'react'

export default function BookmarksPage({ savedCards, onRemoveAllBookmarks }) {
  const [filteredCards, setFilteredCards] = useState(savedCards)

  function filterCards(color) {
    if (color === 'all') {
      return setFilteredCards(savedCards)
    }
    const filter = savedCards.filter(card => card.colors?.includes(color))
    if (filter.length > 0) {
      setFilteredCards(filter)
    } else {
      setFilteredCards([])
    }
  }

  useEffect(() => {
    setFilteredCards(savedCards)
  }, [savedCards])

  return (
    <>
      <Title>Bookmarked Cards</Title>
      <ActionContainer>
        <Filter filterCards={filterCards} />
        <DeleteButton
          onClick={() => {
            onRemoveAllBookmarks()
            setFilteredCards([])
          }}
        >
          Remove all Bookmarks
        </DeleteButton>
      </ActionContainer>
      {filteredCards?.length > 0 ? (
        <List role="list">
          {filteredCards.map(({ _id, name, image, colors, rarity, power }) => {
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
  background-color: var(--primary-color);
  color: var(--text-color);

  @media (prefers-color-scheme: light) {
    background-color: var(--black);
    color: var(--main-color);
  }
`

const List = styled.ul`
  padding-left: 0;
  overflow-y: scroll;
`

const DeleteButton = styled(Button)`
  border-radius: 0;
  background-color: var(--secondary-color);
  color: var(--text-color);
`
