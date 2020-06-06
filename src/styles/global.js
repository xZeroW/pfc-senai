import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif !important;
  }

  html, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;