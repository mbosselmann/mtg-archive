import Navigation from './components/nav/Navigation'
import { useState } from 'react'
import styled from 'styled-components'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import DetailsPage from './pages/DetailsPage'
import BookmarksPage from './pages/BookmarksPage'
import { useEffect } from 'react'
import {
  getBookmarkedCards,
  saveBookmarkedCard,
  deleteBookmarkedCard,
} from './services/bookmarks.js'

function App() {
  const [data, setData] = useState([])
  const [message, setMessage] = useState('')
  const [savedCards, setSavedCards] = useState([])
  let location = useLocation()
  const navigate = useNavigate()

  async function getCard(name) {
    try {
      const response = await fetch(
        `https://api.magicthegathering.io/v1/cards?name=${name}`
      )
      const data = await response.json()
      handleData(data.cards)
      if (data.cards.length === 0) {
        setMessage('Nothing found! Please try another possible name.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  function handleData(newData) {
    const newCards = newData.map(card => {
      const newCard = {
        _id: card.id,
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
        isBookmarked: false,
      }

      return newCard
    })
    const checkedNewCards = newCards.map(card => {
      if (savedCards?.find(savedCard => savedCard._id === card._id)) {
        return { ...card, isBookmarked: true }
      } else {
        return card
      }
    })
    setData(checkedNewCards)
  }

  function handleSaveCard(id) {
    if (savedCards?.filter(card => card._id === id).length > 0) {
      setSavedCards(savedCards.filter(card => card._id !== id))
      deleteBookmarkedCard(id)
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
      saveBookmarkedCard({ ...newCard, isBookmarked: true })
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

  function removeAllBookmarks() {
    setSavedCards(
      savedCards.map(card => {
        const newCard = { ...card, isBookmarked: false }
        return newCard
      })
    )
  }

  useEffect(() => {
    const loadBookmarks = async () => {
      const bookmarks = await getBookmarkedCards()
      setSavedCards(bookmarks)
    }
    loadBookmarks()
  }, [])

  return (
    <Grid pathname={location.pathname}>
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage cards={data} getCard={getCard} message={message} />
          }
        />
        <Route
          path="/:_id"
          element={
            <DetailsPage
              data={data}
              savedCards={savedCards}
              onSaveCard={handleSaveCard}
            />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <BookmarksPage
              savedCards={savedCards}
              onRemoveAllBookmarks={removeAllBookmarks}
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
