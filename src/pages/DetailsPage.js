import CardDetails from '../components/CardDetails'

import styled from 'styled-components'

export default function DetailsPage({ onFindCard, card }) {
  return (
    <>
      <Title>Card Details</Title>
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
