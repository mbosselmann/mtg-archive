import styled from 'styled-components'

export default function Card({ name, text, image }) {
  return (
    <Article>
      <h2>{name}</h2>
      <p>{text}</p>
      <img src={image} alt="" />
    </Article>
  )
}

const Article = styled.li`
  list-style: none;
  padding: 20px;
  box-shadow: 0 0 10px #ffb896;
  border-radius: 5px;
  margin: 20px;
`
