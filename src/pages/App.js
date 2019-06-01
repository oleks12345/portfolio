import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import Header from 'templates/Header/Header';
import About from 'templates/About/About';
import { Spacer } from 'components/Spacer/Spacer';
import Projects from 'templates/Projects/Projects';

const Placeholder = styled.div`
   height: 100vh;
   background-color: #eee;
`;

const App = () => {
   return (
      <PageTemplate>
         <Header />
         <About />
         <Spacer />
         <Projects />
         <Spacer />
         <Placeholder />
      </PageTemplate>
   );
};

export default App;
