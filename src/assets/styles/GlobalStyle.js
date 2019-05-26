import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,regular,600,800);

   body {
      margin: 0;
      padding: 0;
      font-family: "Open Sans";
   }

   html{
      font-size: 62.5%;
   }

   *, *::before, *::after {
      box-sizing: border-box;
   }
`;

export default GlobalStyle;
