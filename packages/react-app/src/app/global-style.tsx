import { createGlobalStyle } from 'styled-components'

import { ITheme } from './theme'
import shortStack from '../assets/fonts/ShortStack-Regular.ttf'

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: "ShortStack";
    src: url("${shortStack}");
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'ShortStack', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, p, input, textarea {
    color: ${({ theme }) => theme.palette.primary};
    font-family: 'ShortStack', sans-serif;
    letter-spacing: normal;
    line-height: normal;
    margin: 0;
  }

  p.error {
    color: ${({ theme }) => theme.palette.error};
  }

  a {
    cursor: pointer;
    font-family: 'ShortStack', sans-serif;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.palette.primary};
    cursor: pointer;
    font-family: 'ShortStack', sans-serif;
    outline:none;
    padding: 0;

    &:hover {
      opacity: 0.7;
    }
  }

  input:focus, textarea:focus {
    outline: none;
  }

  input[type='number'] {
    -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export default GlobalStyle
