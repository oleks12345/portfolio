import React, { useState } from 'react';
// import styled from "styled-components";
import Hamburger from 'components/Menu/Hamburger';
import Menu from 'components/Menu/Menu';
import { menuItems } from 'assets/content/menuItems';
import { socials } from 'assets/content/socials';

const Nav = () => {
   const [ isMenuOpen, setIsMenuOpen ] = useState( false );
   const handleMenuClick = () => setIsMenuOpen( !isMenuOpen );
   return (
    <>
      <Hamburger onClick={ handleMenuClick } isOpen={ isMenuOpen } />
      <Menu menuItems={ menuItems } isOpen={ isMenuOpen } socials={ socials } />
    </>
   );
};

export default Nav;
