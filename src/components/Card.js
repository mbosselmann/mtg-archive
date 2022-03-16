import styled from 'styled-components'

export default function Card({ name, text }) {
  return (
    <Article>
      <h2>{name}</h2>
      <p>{text}</p>
    </Article>
  )
}

const Article = styled.article`
  padding: 20px;
  box-shadow: 0 0 10px #ffb896;
  border-radius: 5px;
`
