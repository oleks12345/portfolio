import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const StyledButton = styled.button`
   position: relative;
   padding: 25px 15px;

   border: none;
   background-color: transparent;
   z-index: 99;
`;

const burgerAnim = ( y, rot, dir = 0 ) => keyframes`
   0% {
      transform: translateY( ${dir ? y : 0}px ) rotate( ${dir ? rot : 0}deg ) ;
   }
   50% {
      transform: translateY( ${y}px ) 
   }
   100% {
      transform: translateY( ${!dir ? y : 0}px ) rotate( ${!dir ? rot : 0}deg )
   }
`;
const InnerButton = styled.div`
   position: relative;
   width: 30px;
   height: 3px;
   top: 10px;
   background-color: ${( { theme } ) => theme.primary};
   animation: ${( { isOpen } ) =>
      isOpen ? () => burgerAnim( -10, 45 ) : () => burgerAnim( -10, 45, 1 )}
      0.3s cubic-bezier(0.26, -0.39, 0.74, 1.49) forwards;
   box-shadow: 0 0 0 2px ${( { theme } ) => theme.greyTransparent};
   ::before,
   ::after {
      content: '';
      box-shadow: 0 0 0 2px ${( { theme } ) => theme.greyTransparent};
      position: absolute;
      width: 30px;
      height: 3px;
      background-color: ${( { theme } ) => theme.primary};
      left: 0;
   }
   ::before {
      top: -20px;
      animation: ${( { isOpen } ) =>
      isOpen ? () => burgerAnim( 20, -90 ) : () => burgerAnim( 20, -90, 1 )}
         0.3s cubic-bezier(0.26, -0.39, 0.74, 1.49) forwards;
   }
   ::after {
      animation: ${( { isOpen } ) =>
      isOpen ? () => burgerAnim( 10, 0 ) : () => burgerAnim( 10, 0, 1 )}
         0.3s cubic-bezier(0.26, -0.39, 0.74, 1.49) forwards;
      top: -10px;
   }
`;

const Hamburger = ( { isOpen, ...props } ) => {
   return (
      <StyledButton { ...props }>
         <InnerButton isOpen={ isOpen } />
      </StyledButton>
   );
};
Hamburger.propTypes = {
   isOpen: PropTypes.bool,
};
Hamburger.defaultProps = {
   isOpen: false,
};

export default Hamburger;
