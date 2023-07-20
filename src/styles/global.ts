import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
 }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blueHighlight};
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors["gray-800"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 16px Archivo, sans-serif;
  }
`;
