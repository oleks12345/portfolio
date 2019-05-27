import React from 'react';
import styled from 'styled-components';
import { ColorSecondary } from 'components/ColorSecondary/ColorSecondary';

const StyledSection = styled.section`
   color: ${( { theme } ) => theme.grey};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-left: 10%;
   padding-right: 10%;
`;
const Title = styled.h2`
   font-size: ${( { theme } ) => theme.font.size.l};
   font-weight: ${( { theme } ) => theme.font.weight.bold};
   text-align: center;
`;

const About = () => {
   return (
      <StyledSection id="about">
         <Title>
            O <ColorSecondary>Mnie</ColorSecondary>
         </Title>
      </StyledSection>
   );
};

export default About;
