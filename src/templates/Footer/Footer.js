import React from 'react';
import styled from 'styled-components';
import { StyledSection } from 'components/StyledSection/StyledSection';

const StyledFooter = styled( StyledSection )`
   height: 50px;
   padding: 0;
   justify-content: center;
   text-align: right;
   font-size: ${( { theme } ) => theme.font.size.s};
   background-color: ${( { theme } ) => theme.grey};
   color: ${( { theme } ) => theme.primary};
`;
const Wrapper = styled.div`
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
`;

const Footer = () => {
   return (
      <StyledFooter as="footer">
         <Wrapper>&copy; 2019 oleks.pl </Wrapper>
      </StyledFooter>
   );
};

export default Footer;
