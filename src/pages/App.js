import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Header from 'templates/Header';
import About from 'templates/About';

const Placeholder = styled.div`
   height: 100vh;
   background-color: #eee;
`;

const App = () => {
   return (
      <PageTemplate>
         <Header />
         <About />
         <Placeholder />
      </PageTemplate>
   );
};

export default App;
