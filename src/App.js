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
    console.log(data.cards)
    handleData(data.cards)
  }

  function handleData(newData) {
    const newCards = newData.map(card => {
      const newCard = {
        id: card.id,
        name: card.name,
        text: card.text,
      }
      return newCard
    })
    setData(newCards)
  }

  return (
    <Flex>
      <h1>MTG Archive</h1>
      <Search getCard={getCard} />
      {data.map(entry => (
        <Card key={entry.id} name={entry.name} text={entry.text} />
      ))}
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
