import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;

    ::after,
    ::before {
      box-sizing: border-box;
    }
  }

  body {
    font-family: Open Sans, Arial, Helvetica, sans-serif;
  }

  html, body {
    height: 100%;
  }
`

export default GlobalStyle
