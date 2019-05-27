import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Header from 'templates/Header';

const Placeholder = styled.div`
   height: 100vh;
`;

const App = () => {
   return (
      <PageTemplate>
         <Header>Hello</Header>
         <Placeholder />
      </PageTemplate>
   );
};

export default App;
