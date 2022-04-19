import CardDetails from '../components/CardDetails'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

export default function DetailsPage({ onFindCard, card }) {
  return (
    <>
      <Title>Card Details</Title>
      <ActionContainer>
        <BackLink to="/">Back to Search Results</BackLink>
        <button>Save</button>
      </ActionContainer>
      <CardDetails onFindCard={onFindCard} card={card} />
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  background-color: rgb(21, 11, 0);
  color: #fff;
  position: sticky;
  top: 0;
`

const ActionContainer = styled.div`
  display: flex;
  background-color: #fff;

  button {
    flex: 1;
    border: none;
    padding: 8px;
  }
`

const BackLink = styled(Link)`
  flex: 1;
  padding: 8px;
  display: grid;
  place-items: center;
  text-decoration: none;
  color: #000;
`
