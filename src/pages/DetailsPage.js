import CardDetails from '../components/card/CardDetails'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ActionContainer from '../components/action/ActionContainer'
import { Link } from 'react-router-dom'
import { StyledHeart } from '../components/icons/Heart.js'
import { ArrowIcon } from '../components/icons/ArrowIcon.js'
import styled from 'styled-components'

export default function DetailsPage({ data, savedCards, onSaveCard }) {
  const [card, setCard] = useState({})
  const [isBookmarked, setIsBookmarked] = useState(false)
  console.log('data', data)
  console.log('card', card)
  const { _id } = useParams()
  console.log(_id)

  function findCard(_id) {
    if (data.length > 0) {
      setCard(data.find(card => card._id === _id))
      if (card.isBookmarked) {
        setIsBookmarked(true)
      }
    } else {
      setCard(savedCards.find(card => card._id === _id))
      if (card.isBookmarked) {
        setIsBookmarked(true)
      }
    }
  }

  function handleBookmarkClick(_id) {
    onSaveCard(_id)
    setIsBookmarked(!isBookmarked)
  }

  useEffect(() => {
    findCard(_id)
  }, [card, _id]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {card._id && (
        <>
          <Title color={card.colors ? card.colors[0] : ''}>Card Details</Title>
          <ActionContainer>
            <BackLink to="/">
              <ArrowIcon />
              <p>Back to Search Results</p>
            </BackLink>
            <Button
              onClick={() => handleBookmarkClick(_id)}
              isBookmarked={isBookmarked}
            >
              <StyledHeart />
            </Button>
          </ActionContainer>
          <CardDetails card={card} />
        </>
      )}
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  background-color: var(--black);
  color: #fff;
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'White' && 'color: var(--black)'};
  ${props => props.color === 'Red' && 'background-color: var(--red)'};
  ${props => props.color === 'Blue' && 'background-color: var(--blue)'};
  ${props => props.color === 'Green' && 'background-color: var(--green)'};
  position: sticky;
  top: 0;
`
const Button = styled.button`
  flex: 1;
  display: grid;
  place-items: center;
  border: none;
  padding: 8px;
  text-transform: uppercase;
  font-weight: bold;
  ${props => props.isBookmarked && 'color: #fff'};
  ${props =>
    props.isBookmarked ? 'background-color: #000' : 'background-color: #d1bea7'}
`

const BackLink = styled(Link)`
  display: flex;
  flex: 2;
  gap: 10px;
  padding: 8px;
  text-decoration: none;
  color: var(--text-color);
`
