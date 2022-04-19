import Card from '../components/Card'
import Search from '../components/Search'

import styled from 'styled-components'

export default function SearchPage({ getCard, cards }) {
  return (
    <>
      <Search getCard={getCard} />
      <List role="list">
        {cards.map(
          ({
            id,
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
          }) => {
            if (image) {
              return (
                <Card
                  key={id}
                  name={name}
                  text={text}
                  image={image}
                  colors={colors}
                  originalType={originalType}
                  power={power}
                  subtypes={subtypes}
                  supertypes={supertypes}
                  type={type}
                  rarity={rarity}
                  types={types}
                />
              )
            }
          }
        )}
      </List>
    </>
  )
}

const List = styled.ul`
  padding-left: 0;
  overflow-y: scroll;
`
