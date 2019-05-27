import React from 'react';
import styled from 'styled-components';
import { ColorSecondary } from 'components/ColorSecondary/ColorSecondary';

const StyledSection = styled.section`
   color: ${( { theme } ) => theme.grey};
`;
const Title = styled.h2`
   font-size: ${( { theme } ) => theme.font.size.l};
   font-weight: ${( { theme } ) => theme.font.weight.bold};
   text-align: center;
`;

const About = () => {
   return (
      <StyledSection>
         <Title>
            O <ColorSecondary>Mnie</ColorSecondary>
         </Title>
      </StyledSection>
   );
};

export default About;
