import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Menu/Hamburger';
import Menu from 'components/Menu/Menu';
import { menuItems } from 'assets/content/menuItems';
import { socials } from 'assets/content/socials';

const Wrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   z-index: 99;
   display: flex;
   justify-content: center;
   > div {
      text-align: right;
      width: 100%;
      max-width: 1080px;
   }
`;
const HamburgerWrapper = styled.div`
   text-align: right;
   width: 100%;
   max-width: 1080px;
`;

const Nav = () => {
   const [ isMenuOpen, setIsMenuOpen ] = useState( false );
   const handleMenuClick = () => setIsMenuOpen( !isMenuOpen );
   const handleKeyboard = e => {
      const code = e.keyCode;
      if ( code === 27 ) {
         setIsMenuOpen( false );
      }
   };
   useEffect( () => window.addEventListener( 'keydown', handleKeyboard ), [] );
   return (
      <>
         <Wrapper>
            <HamburgerWrapper>
               <Hamburger onClick={ handleMenuClick } isOpen={ isMenuOpen } />
            </HamburgerWrapper>
         </Wrapper>
         <Menu
            itemClick={ handleMenuClick }
            menuItems={ menuItems }
            isOpen={ isMenuOpen }
            socials={ socials }
         />
      </>
   );
};

export default Nav;
