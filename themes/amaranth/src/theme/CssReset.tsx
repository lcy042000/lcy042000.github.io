import { createGlobalStyle } from "styled-components";

const CssReset = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    min-width: 100%;
  }
  #___gatsby #gatsby-focus-wrapper {
    min-height: 100vh;
    min-width: 100%;
  }

  @font-face {
    font-family: "Alfa Slab One", serif;
    src: url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
    unicode-range: U+0041-005A, U+0061-007A;
  }

  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
    unicode-range: U+AC00-U+D7A3;
  }
`;

export default CssReset;
