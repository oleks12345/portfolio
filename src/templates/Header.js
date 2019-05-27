import React from 'react';
import headerImg from 'assets/images/headerImg.webp';
import styled from 'styled-components';
import ScrollButton from 'components/ScrollButton/ScrollButton';
import { ColorSecondary } from 'components/ColorSecondary/ColorSecondary';

const StyledHeader = styled.header`
   background: linear-gradient(
         45deg,
         rgba(59, 67, 76, 0.95) 0%,
         rgba(59, 67, 76, 0.9) 100%
      ),
      right/cover url(${headerImg});
   height: 100vh;
   display: flex;
   justify-content: center;
`;
const HeaderWrapper = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   max-width: 1080px;
   align-items: center;

   color: ${( { theme } ) => theme.primary};
   div {
      width: 100%;
      padding-left: 10%;
   }
`;
const H1 = styled.h1`
   margin: 0;
   font-size: ${( { theme } ) => theme.font.size.sm};
   ${( { theme } ) => theme.mdq.md} {
      font-size: ${( { theme } ) => theme.font.size.l};
   }
   ${( { theme } ) => theme.mdq.lg} {
      font-size: ${( { theme } ) => theme.font.size.xl};
   }
`;

const Spacer = styled.hr`
   display: inline-block;
   margin: 15px 0;
   border: 1px solid ${( { theme } ) => theme.secondary};
   width: 165px;
`;
const H2 = styled.h2`
   margin: 0;
   font-size: ${( { theme } ) => theme.font.size.sm};
   ${( { theme } ) => theme.mdq.md} {
      font-size: ${( { theme } ) => theme.font.size.l};
   }
`;
const Header = () => {
   return (
      <StyledHeader id="header">
         <HeaderWrapper>
            <div>
               <H1>
                  Cześć, <ColorSecondary>jestem</ColorSecondary> <br />
                  Aleksander Uniatowicz
               </H1>
               <Spacer />
               <H2>
                  FrontEnd <ColorSecondary> Developer </ColorSecondary>
               </H2>
            </div>
         </HeaderWrapper>
         <ScrollButton />
      </StyledHeader>
   );
};

export default Header;
