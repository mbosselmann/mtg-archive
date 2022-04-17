import Card from './components/Card'
import { useState } from 'react'
import styled from 'styled-components'
import Search from './components/Search'

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
      <Search getCard={getCard} />
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

  h1 {
    text-align: center;
    background-color: #2f4858;
    color: #fff;
    padding-bottom: 10px;
  }
`
