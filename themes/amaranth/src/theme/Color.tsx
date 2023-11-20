import { createGlobalStyle, css } from "styled-components";

const Colors = css`
  :root {
    --color-primary-100: #e88896;
    --color-primary-200: #e47485;
    --color-primary-300: #e06073;
    --color-primary-400: #dc4c62;
    --color-primary: #d83850;
    --color-primary-600: #c23248;
    --color-primary-700: #ad2d40;
    --color-primary-800: #972738;
    --color-primary-900: #822230;

    --color-green-000: #ebfbee;
    --color-green-100: #d3f9d8;
    --color-green-200: #b2f2bb;
    --color-green-300: #8ce99a;
    --color-green-400: #69db7c;
    --color-green-500: #51cf66;
    --color-green-600: #40c057;
    --color-green-700: #37b24d;
    --color-green-800: #2f9e44;
    --color-green-900: #2b8a3e;

    --color-grey-100: #f7f7f7;
    --color-grey-200: #dbdbdb;
    --color-grey-300: #c0c0c0;
    --color-grey-400: #adadad;
    --color-grey-500: #9a9a9a;
    --color-grey-600: #6e6e6e;
    --color-grey-700: #414141;
    --color-grey-800: #2e2e2e;
    --color-grey-900: #1a1a1a;

    --color-text: #000000;
    --color-inverted-text: #ffffff;
    --color-background: #ffffff;
    --color-inverted-background: #000000;
  }
`;

const Color = createGlobalStyle`
    ${Colors}
`;

export default Color;
