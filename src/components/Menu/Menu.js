import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNav = styled.nav`
   position: fixed;
   width: 100vw;
   height: 100vh;
   top: 0;
   left: 0;
   z-index: 90;
   opacity: ${( { isOpen } ) => ( isOpen ? 1 : 0 )};
   transform: translateX(${( { isOpen } ) => ( isOpen ? '0' : '100%' )});
   background-color: ${( { theme } ) => theme.greyTransparent};
   transition: ${( { isOpen } ) =>
      isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'};
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;
const MenuUl = styled.ul`
   list-style: none;
   text-align: center;
   padding: 0;
`;
const MenuItem = styled.li`
   padding-top: 5px;
   padding-bottom: 5px;
   font-size: ${( { theme } ) => theme.font.size.m};
   font-weight: ${( { theme } ) => theme.font.weight.semibold};
   ${( { theme } ) => theme.mdq.md} {
      font-size: ${( { theme } ) => theme.font.size.l};
      padding-top: 10px;
      padding-bottom: 10px;
   }
   a {
      color: ${( { theme } ) => theme.primary};
      text-decoration: none;
      text-transform: uppercase;
   }
`;
const Spacer = styled.hr`
   display: inline-block;
   margin-bottom: 10px;
   border: 1px solid ${( { theme } ) => theme.secondary};
   width: 165px;
`;
const SocialsUl = styled.ul`
   list-style: none;
   display: flex;
   padding: 0;
   img {
      width: 40px;
   }
`;
const SocialsItem = styled.li`
   padding: 5px;
`;

const Menu = ( { isOpen, menuItems, socials, itemClick } ) => {
   return (
      <StyledNav isOpen={ isOpen }>
         <MenuUl>
            {menuItems.map( ( menuItem ) => (
               <MenuItem key={ menuItem.id } onClick={ itemClick }>
                  <a href={ menuItem.id }>{menuItem.name}</a>
               </MenuItem>
            ) )}
         </MenuUl>
         <Spacer />
         <SocialsUl>
            {socials.map( ( social ) => (
               <SocialsItem key={ social.name }>
                  <a
                     rel="noopener noreferrer"
                     target="_blank"
                     href={ social.link }
                  >
                     <img src={ social.icon } alt={ social.name } />
                  </a>
               </SocialsItem>
            ) )}
         </SocialsUl>
      </StyledNav>
   );
};

Menu.propTypes = {
   isOpen: PropTypes.bool.isRequired,
   menuItems: PropTypes.arrayOf(
      PropTypes.shape( {
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
      } )
   ).isRequired,
   socials: PropTypes.arrayOf(
      PropTypes.shape( {
         link: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         icon: PropTypes.string.isRequired,
      } )
   ).isRequired,
   itemClick: PropTypes.func.isRequired,
};

export default Menu;
