import Colors from '../circles/Colors.js'
import styled from 'styled-components'

export default function Filter({ filterCards }) {
  return (
    <Container>
      <Colors
        colors={['White', 'Black', 'Red', 'Green', 'Blue']}
        filterCards={filterCards}
        component={'button'}
      />
    </Container>
  )
}

const Container = styled.div`
  background-color: #b1aba5;
  width: 100%;
  display: grid;
  place-items: center;
`
