import Button from './Button'
import styled from 'styled-components'

export default function Search({ getCard }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { name } = form.elements
    getCard(name.value)
    form.reset()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter Name of Card</label>
      <Flex>
        <Input type="text" id="name" name="name" required />
        <SearchButton type="submit">Search</SearchButton>
      </Flex>
    </Form>
  )
}

const Form = styled.form`
  background-color: #e2dcd5;
  padding: 20px;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  height: 7rem;

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
  font-weight: bold;
`
const Input = styled.input`
  padding: 8px;
  border-radius: 8px 0 0 8px;
  border: none;
  width: 0;
  flex-grow: 3;

  &:focus {
    outline: medium solid rgb(21, 11, 0);
    outline-offset: -3px;
  }
`
