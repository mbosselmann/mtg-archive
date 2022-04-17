import Button from './Button'
import styled from 'styled-components'

export default function Search({ getCard }) {
  function handleSubmit(event) {
    event.preventDefault()
    getCard()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter Name of Card for Search</label>
      <Flex>
        <Input type="text" id="name" name="name" />
        <SearchButton type="submit">Search</SearchButton>
      </Flex>
    </Form>
  )
}

const Form = styled.form`
  background-color: papayawhip;
  padding: 20px;
  margin-bottom: 10px;

  label {
    padding-left: 5px;
    font-weight: bold;
  }
`
const Flex = styled.div`
  display: flex;
`
const SearchButton = styled(Button)`
  border-radius: 0 8px 8px 0;
  flex-grow: 1;
`
const Input = styled.input`
  padding: 8px;
  border-radius: 8px 0 0 8px;
  border: none;
  flex-grow: 2;

  &:focus {
    outline: medium solid #2f4858;
    outline-offset: -3px;
  }
`
