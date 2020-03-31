import { createGlobalStyle } from 'styled-components';
import FontFaces from './fonts';

const global = createGlobalStyle`
  ${FontFaces};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font: 400 15px 'robotoregular', sans-serif;
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px 'robotoregular', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default global;
