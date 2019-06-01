import React from 'react';
import styled from 'styled-components';
import { StyledSection } from 'components/StyledSection/StyledSection';
import { StyledTitle } from 'components/StyledTitle/StyledTitle';

import mailIcon from 'assets/images/contact/mail.svg';
import messengerIcon from 'assets/images/contact/messenger.svg';
import phoneIcon from 'assets/images/contact/phone.svg';

const ContactWrapper = styled.div`
   width: 100%;
   max-width: 500px;
`;
const ContactItem = styled.a`
   padding: 5px;
   display: flex;
   align-items: center;
   color: ${( { theme } ) => theme.grey};
   text-decoration: none;
`;
const ContactImg = styled.img`
   height: 60px;
   margin-right: 15px;
`;

const Contact = () => {
   return (
      <StyledSection>
         <StyledTitle>Kontakt</StyledTitle>
         <ContactWrapper>
            <ContactItem href="mailto:kontakt@oleks.pl">
               <ContactImg src={ mailIcon } alt="e-mail" /> kontakt@oleks.pl
            </ContactItem>
            <ContactItem href="https://m.me/oleks12345">
               <ContactImg src={ messengerIcon } alt="messenger" /> Aleksander
               Uniatowicz
            </ContactItem>
            <ContactItem>
               <ContactImg src={ phoneIcon } alt="Telefon" /> Zapytaj na mailu lub
               messengerze
            </ContactItem>
         </ContactWrapper>
      </StyledSection>
   );
};

export default Contact;
