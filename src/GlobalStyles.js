import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
}

:root {
  --main-color: #fff;
  --secondary-color: #e2dcd5;
  --text-color: #000;
  --black: rgb(21, 11, 0);
  --red: rgb(211, 32, 42);
  --blue: rgb(14, 104, 171);
  --green: rgb(0, 115, 62);
  --white: rgb(166, 159, 157);

}

html, body, #root {
    height: 100%;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
}
img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
input, button, textarea, select {
    font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    margin: 0;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.25rem;
}
p {
  font-size: 1rem;
}
`

export default GlobalStyles
