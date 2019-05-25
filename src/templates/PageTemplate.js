import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";

const PageTemplate = ( { children } ) => {
   return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>{children}</>
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
