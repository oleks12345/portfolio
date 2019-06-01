import React from 'react';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import Header from 'templates/Header/Header';
import About from 'templates/About/About';
import { Spacer } from 'components/Spacer/Spacer';
import Projects from 'templates/Projects/Projects';
import Contact from 'templates/Contact/Contact';
import Footer from 'templates/Footer/Footer';

const App = () => {
   return (
      <PageTemplate>
         <Header />
         <About />
         <Spacer />
         <Projects />
         <Spacer rotate />
         <Contact />
         <Footer />
      </PageTemplate>
   );
};

export default App;
