import React, { useState } from 'react';
// import styled from "styled-components";
import Hamburger from 'components/Menu/Hamburger';
import Menu from 'components/Menu/Menu';
import { menuItems } from 'assets/content/menuItems';
import IconGh from 'assets/images/github.svg';
import IconFb from 'assets/images/facebook.svg';
import IconIn from 'assets/images/linkedin.svg';

const socials = [
   {
      icon: IconFb,
      name: 'facebook',
      link: ''
   },
   {
      icon: IconGh,
      name: 'github',
      link: ''
   },
   {
      icon: IconIn,
      name: 'linkedin',
      link: ''
   }
];

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
