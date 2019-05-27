import React from 'react';
import styled from 'styled-components';
import scrollImg from 'assets/images/scroll.svg';

const StyledButton = styled.button`
   position: absolute;
   background: transparent;
   border: none;
   bottom: 10px;
   left: 50%;
   padding: 15px;
   transform: translateX(-50%);
`;

const ScrollButton = () => {
   const handleScrollClick = () => {
      window.scrollTo( 0, window.innerHeight );
   };
   return (
      <StyledButton onClick={ handleScrollClick }>
         <img src={ scrollImg } alt="w dół" />
      </StyledButton>
   );
};

export default ScrollButton;
