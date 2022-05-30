import CardDetails from '../components/card/CardDetails'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ActionContainer from '../components/action/ActionContainer'
import { Link } from 'react-router-dom'
import { StyledHeart } from '../components/icons/Heart.js'
import { ArrowIcon } from '../components/icons/ArrowIcon.js'
import styled from 'styled-components'

export default function DetailsPage({ data, onSaveCard }) {
  const [card, setCard] = useState({})
  const [isBookmarked, setIsBookmarked] = useState(false)

  const { _id } = useParams()

  function findCard(_id) {
    setCard(data.find(card => card._id === _id))
    if (card.isBookmarked) {
      setIsBookmarked(true)
    }
  }

  function handleBookmarkClick(_id) {
    onSaveCard(_id)
    setIsBookmarked(!isBookmarked)
  }

  useEffect(() => {
    findCard(_id)
  }, [card])

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
  background-color: rgb(21, 11, 0);
  color: #fff;
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'White' && 'color: rgb(21, 11, 0)'};
  ${props => props.color === 'Red' && 'background-color: rgb(211, 32, 42)'};
  ${props => props.color === 'Blue' && 'background-color: rgb(14, 104, 171)'};
  ${props => props.color === 'Green' && 'background-color: rgb(0, 115, 62)'};
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
  color: #000;
`
