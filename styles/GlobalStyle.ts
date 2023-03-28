import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 html,
  body {
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
}
`;
