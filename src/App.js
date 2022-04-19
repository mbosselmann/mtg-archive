import Card from './components/Card'
import { useState } from 'react'
import styled from 'styled-components'
import Search from './components/Search'

function App() {
  const [data, setData] = useState([])
  console.log(data)

  async function getCard(name) {
    console.log(name)
    const response = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${name}`
    )
    const data = await response.json()
    handleData(data.cards)
  }

  function handleData(newData) {
    const newCards = newData.map(card => {
      const newCard = {
        id: card.id,
        name: card.name,
        text: card.text,
        image: card.imageUrl,
        colors: card.colors,
        originalType: card.originalType,
        power: card.power,
        subtypes: card.subtypes,
        supertypes: card.supertypes,
        type: card.type,
        rarity: card.rarity,
        types: card.types,
      }
      return newCard
    })
    setData(newCards)
  }

  return (
    <Flex>
      <h1>MTG Archive</h1>
      <Search getCard={getCard} />
      <List role="list">
        {data.map(
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
    </Flex>
  )
}

export default App

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    background-color: #2f4858;
    color: #fff;
    padding: 10px 0;
  }
`

const List = styled.ul`
  padding-left: 0;
`
