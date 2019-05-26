import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import Nav from "components/Menu/Nav";

const PageTemplate = ( { children } ) => {
   return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={ theme }>
        <>
          <Nav />
          {children}
        </>
      </ThemeProvider>
    </>
   );
};
PageTemplate.propTypes = {
   children: PropTypes.oneOfType( [
      PropTypes.arrayOf( PropTypes.node ),
      PropTypes.node
   ] ).isRequired
};

export default PageTemplate;
