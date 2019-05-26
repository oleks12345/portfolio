import React, { useState } from "react";
// import styled from 'styled-components';
import Hamburger from "components/Menu/Hamburger";

const Menu = () => {
   const [ isMenuOpen, setIsMenuOpen ] = useState( false );
   const handleMenuClick = () => {
      setIsMenuOpen( !isMenuOpen );
   };
   return (
    <>
      <Hamburger onClick={ handleMenuClick } isOpen={ isMenuOpen } />
    </>
   );
};

export default Menu;
