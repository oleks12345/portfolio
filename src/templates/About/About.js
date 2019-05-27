import React from 'react';
import styled from 'styled-components';
import { ColorSecondary } from 'components/ColorSecondary/ColorSecondary';
import Skills from 'templates/About/Skills';

const StyledSection = styled.section`
   color: ${( { theme } ) => theme.grey};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 50px 10%;
`;
const Title = styled.h2`
   font-size: ${( { theme } ) => theme.font.size.l};
   text-align: center;
   text-transform: uppercase;
`;

const AboutWrapper = styled.div`
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
   font-size: ${( { theme } ) => theme.font.size.s};
`;

const AboutText = styled.p``;

const About = () => {
   return (
      <StyledSection id="about">
         <Title>
            O <ColorSecondary>Mnie</ColorSecondary>
         </Title>

         <AboutWrapper>
            <AboutText>
               Szukam pracy jako FrontEnd developer we{' '}
               <ColorSecondary as="strong">Wrocławiu.</ColorSecondary> Chciałbym
               pracować w firmie która da mi szanse na{' '}
               <ColorSecondary as="strong">rozwój.</ColorSecondary>
            </AboutText>
         </AboutWrapper>
         <Skills />
      </StyledSection>
   );
};

export default About;
