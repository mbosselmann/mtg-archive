import CardDetails from '../components/card/CardDetails'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ActionContainer from '../components/action/ActionContainer'
import { StyledHeart } from '../components/icons/Heart.js'
import { ArrowIcon } from '../components/icons/ArrowIcon.js'
import styled from 'styled-components'

export default function DetailsPage({ data, savedCards, onSaveCard }) {
  const [card, setCard] = useState({})
  const [cards, setCards] = useState([])
  const [isBookmarked, setIsBookmarked] = useState(false)
  const navigate = useNavigate()
  const { _id } = useParams()

  console.log('Hello World!')

  function handleBookmarkClick(_id) {
    onSaveCard(_id)
    setIsBookmarked(!isBookmarked)
  }

  useEffect(() => {
    setCards(() => {
      return data.length > 0 ? data : savedCards
    })
  }, [data, savedCards])

  useEffect(() => {
    function findCard(_id) {
      if (cards.length > 0) {
        const searchedCard = cards.find(card => card._id === _id)
        setCard(searchedCard)
        if (searchedCard?.isBookmarked) {
          setIsBookmarked(true)
        }
      }
    }
    findCard(_id)
  }, [card, _id, cards])

  return (
    <>
      {card._id && (
        <>
          <Title color={card.colors ? card.colors[0] : ''}>Card Details</Title>
          <ActionContainer>
            <BackButton onClick={() => navigate(-1)}>
              <ArrowIcon />
            </BackButton>
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
  background-color: var(--tertiary-color);
  color: var(--text-color);
  ${props => props.color === 'White' && 'background-color: rgb(248, 231, 185)'};
  ${props => props.color === 'White' && 'color: var(--tertiary-color)'};
  ${props => props.color === 'Red' && 'background-color: var(--red)'};
  ${props => props.color === 'Blue' && 'background-color: var(--blue)'};
  ${props => props.color === 'Green' && 'background-color: var(--green)'};
  position: sticky;
  top: 0;

  @media (prefers-color-scheme: light) {
    background-color: var(--black);
    color: var(--light-text-color);
    ${props => props.color === 'White' && 'color: var(--black)'};
  }
`
const Button = styled.button`
  flex: 1;
  display: grid;
  place-items: center;
  border: none;
  padding: 8px;
  text-transform: uppercase;
  font-weight: bold;
  ${props =>
    props.isBookmarked ? 'color: var(--red)' : 'color: var(--secondary-color)'};
  background-color: var(--main-color);

  @media (prefers-color-scheme: dark) {
    ${props => (props.isBookmarked ? 'color: var(--red)' : 'color: #fff')};
    background-color: var(--tertiary-color);
  }
`

const BackButton = styled.button`
  border: none;
  display: flex;
  flex: 5;
  gap: 10px;
  padding: 8px;
  text-decoration: none;
  color: var(--text-color);
  background-color: var(--tertiary-color);
`
