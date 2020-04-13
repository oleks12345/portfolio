import React from 'react';
import styled from 'styled-components';
import { ColorSecondary } from 'components/ColorSecondary/ColorSecondary';
import Skills from 'templates/About/Skills';
import { StyledSection } from 'components/StyledSection/StyledSection';
import { StyledTitle } from 'components/StyledTitle/StyledTitle';

const AboutWrapper = styled.div`
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
   font-size: ${( { theme } ) => theme.font.size.s};
`;

const AboutText = styled.p``;

const About = () => {
   return (
      <StyledSection id="about">
         <StyledTitle>
            O <ColorSecondary>Mnie</ColorSecondary>
         </StyledTitle>

         <AboutWrapper>
            <AboutText>
               Jestem studentem informatyki na Uniwersytecie Wrocławskim,
               Interesują mnie technologie webowe. <br />
               Szukam pracy jako Developer we{' '}
               <ColorSecondary as="strong">Wrocławiu.</ColorSecondary> <br />
               Chciałbym pracować w firmie, która da mi szanse na{' '}
               <ColorSecondary as="strong">rozwój.</ColorSecondary>
            </AboutText>
         </AboutWrapper>
         <Skills />
      </StyledSection>
   );
};

export default About;
