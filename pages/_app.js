import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React from 'react';
import { AlurakutStyles } from '../libs/AluraKutMenu';
const GlobalStyle = createGlobalStyle`
 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

  body {
    background-color: #D9E6F6;
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  ${AlurakutStyles}
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#FFFFFF',
    primaryText:'#2E7BB4'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
