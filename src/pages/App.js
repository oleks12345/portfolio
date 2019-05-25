import React from "react";
import styled from "styled-components";
import PageTemplate from "templates/PageTemplate";

const H1 = styled.h1`
  font-size: 70px;
`;

const App = () => {
   return (
      <PageTemplate>
         <H1>Hello</H1>
      </PageTemplate>
   );
};

export default App;
