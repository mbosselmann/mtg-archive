import Card from '../components/Card'
import Search from '../components/Search'
import { Text } from '../components/Text.js'

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
  background-color: rgb(21, 11, 0);
  color: #fff;
`

const List = styled.ul`
  padding-left: 0;
  overflow-y: scroll;
`
