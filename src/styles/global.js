import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;