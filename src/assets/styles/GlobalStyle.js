import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,regular,600,800&display=swap&subset=latin-ext);

   body {
      margin: 0;
      padding: 0;
      font-family: "Open Sans";
      font-size: ${( { theme } ) => theme.font.size.s};
   }

   html{
      font-size: 62.5%;
      scroll-behavior: smooth;
   }

   *, *::before, *::after {
      box-sizing: border-box;
   }

   h2, h3{
      font-weight: ${( { theme } ) => theme.font.weight.semibold};
   }
`;

export default GlobalStyle;
