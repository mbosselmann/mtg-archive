import Navigation from './components/Navigation'
import { useState } from 'react'
import styled from 'styled-components'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import DetailsPage from './pages/DetailsPage'
import BookmarksPage from './pages/BookmarksPage'

function App() {
  const [data, setData] = useState([])
  const [savedCards, setSavedCards] = useState([])
  const { pathname } = useLocation()
  const navigate = useNavigate()

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
          _id: id,
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
          isBookmarked: false,
        }

        return newCard
      }
    )
    const checkedNewCards = newCards.map(card => {
      if (savedCards.find(savedCard => savedCard._id === card._id)) {
        return { ...card, isBookmarked: true }
      } else {
        return card
      }
    })
    setData(checkedNewCards)
  }

  function handleSaveCard(id) {
    if (savedCards.filter(card => card._id === id).length > 0) {
      setSavedCards(savedCards.filter(card => card._id !== id))
      setData(
        data.map(card => {
          if (card._id === id) {
            return { ...card, isBookmarked: false }
          } else {
            return card
          }
        })
      )

      navigate('/bookmarks')
    } else {
      const newCard = data.find(card => card._id === id)
      setSavedCards([...savedCards, { ...newCard, isBookmarked: true }])
      setData(
        data.map(card => {
          if (card._id === id) {
            return { ...card, isBookmarked: true }
          } else {
            return card
          }
        })
      )
    }
  }

  return (
    <Grid pathname={pathname}>
      <Routes>
        <Route
          path="/"
          element={<SearchPage cards={data} getCard={getCard} />}
        />
        <Route
          path="/:_id"
          element={<DetailsPage data={data} onSaveCard={handleSaveCard} />}
        />
        <Route
          path="/bookmarks"
          element={
            <BookmarksPage
              onSaveCard={handleSaveCard}
              savedCards={savedCards}
            />
          }
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
    props.pathname === '/' && 'grid-template-rows: 3rem 7rem auto 4rem;'}
  ${props =>
    props.pathname === '/:id' && 'grid-template-rows: 3rem 4rem auto 4rem;'}
  ${props =>
    props.pathname === '/bookmarks' && 'grid-template-rows: 3rem 1fr 6fr 4rem;'}

  height: 100%;
`
