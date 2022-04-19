import Navigation from './components/Navigation'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import DetailsPage from './pages/DetailsPage'

function App() {
  const [data, setData] = useState([])
  const [card, setCard] = useState({})
  console.log(card)

  const { pathname } = useLocation()
  const navigate = useNavigate()

  async function getCard(name) {
    const response = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${name}`
    )
    const data = await response.json()
    handleData(data.cards)
  }

  useEffect(() => {
    if (data.length === 0) {
      return navigate('/')
    }
  }, [])

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

  function findCard(id) {
    setCard(data.find(card => card.id === id))
  }

  return (
    <Grid pathname={pathname}>
      <Routes>
        <Route
          path="/"
          element={<SearchPage cards={data} getCard={getCard} />}
        />
        <Route
          path=":id"
          element={<DetailsPage onFindCard={findCard} card={card} />}
        />
      </Routes>
      <Navigation />
    </Grid>
  )
}

export default App

const Grid = styled.div`
  display: grid;
  ${props =>
    props.pathname === '/'
      ? 'grid-template-rows: 3rem 7rem 1fr 4rem;'
      : 'grid-template-rows: 3rem 3rem 1fr 4rem;'}
  height: 100%;
`
