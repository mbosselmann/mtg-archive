import Navigation from './components/Navigation'
import { useState } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage'

function App() {
  const [data, setData] = useState([])
  console.log(data)

  async function getCard(name) {
    const response = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${name}`
    )
    const data = await response.json()
    handleData(data.cards)
  }

  function handleData(newData) {
    const newCards = newData.map(
      ({
        id,
        name,
        text,
        imageUrl,
        colors,
        originalType,
        power,
        subtypes,
        supertypes,
        type,
        rarity,
        types,
      }) => {
        const newCard = {
          id,
          name,
          text,
          image: imageUrl,
          colors,
          originalType,
          power,
          subtypes,
          supertypes,
          type,
          rarity,
          types,
        }
        return newCard
      }
    )
    setData(newCards)
  }

  return (
    <Grid>
      <Title>MTG Archive</Title>
      <Routes>
        <Route
          path="/search"
          element={<SearchPage cards={data} getCard={getCard} />}
        />
      </Routes>
      <Navigation />
    </Grid>
  )
}

export default App

const Grid = styled.div`
  display: grid;
  grid-template-rows: 3rem 7rem 1fr 4rem;
  height: 100%;
`

const Title = styled.h1`
  text-align: center;
  background-color: rgb(21, 11, 0);
  color: #fff;
  position: sticky;
  top: 0;
`
