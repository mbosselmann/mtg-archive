import Card from '../components/card/Card'
import Search from '../components/search/Search'
import { Text } from '../components/styles/Text.js'

import styled from 'styled-components'

export default function SearchPage({ getCard, cards, message }) {
  return (
    <>
      <Title>MTG Archive</Title>
      <Search getCard={getCard} />
      {cards.length > 0 ? (
        <List role="list">
          {cards?.map(({ _id, name, image, colors, rarity, power }) => {
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
            } else {
              return null
            }
          })}
        </List>
      ) : (
        <Text>{message}</Text>
      )}
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  background-color: var(--tertiary-color);
  color: var(--text-color);

  @media (prefers-color-scheme: light) {
    color: var(--light-text-color);
    background-color: var(--black);
  }
`

const List = styled.ul`
  padding-left: 0;
  overflow-y: scroll;
`
