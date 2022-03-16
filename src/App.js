import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'
import styled from 'styled-components'

function App() {
  const [data, setData] = useState([])
  console.log(data)

  async function getCard() {
    const response = await fetch(
      'https://api.magicthegathering.io/v1/cards/386616'
    )
    const data = await response.json()
    handleData(data.card)
  }

  function handleData(newData) {
    const newCard = {
      name: newData.name,
      text: newData.text,
    }
    setData([newCard, ...data])
  }

  return (
    <Flex>
      <h1>MTG Archive</h1>
      <Button onClick={getCard}>Get Card</Button>
      {data.map((entry, index) => (
        <Card key={index} name={entry.name} text={entry.text} />
      ))}
    </Flex>
  )
}

export default App

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 10px;

  h1 {
    text-align: center;
  }
`
