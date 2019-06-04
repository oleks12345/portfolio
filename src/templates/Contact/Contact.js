import React from 'react';
import styled from 'styled-components';
import { StyledSection } from 'components/StyledSection/StyledSection';
import { StyledTitle } from 'components/StyledTitle/StyledTitle';

import mailIcon from 'assets/images/contact/mail.svg';
import messengerIcon from 'assets/images/contact/messenger.svg';
import phoneIcon from 'assets/images/contact/phone.svg';
import gitHubIcon from 'assets/images/contact/github.svg';
import linkedInIcon from 'assets/images/contact/linkedin.svg';
import cvIcon from 'assets/images/contact/CV.svg';

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
      <StyledSection id="contact">
         <StyledTitle>Kontakt</StyledTitle>
         <ContactWrapper>
            <ContactItem title="E-Mail" href="mailto:kontakt@oleks.pl">
               <ContactImg src={ mailIcon } alt="e-mail" /> kontakt@oleks.pl
            </ContactItem>
            <ContactItem title="Messenger" href="https://m.me/oleks12345">
               <ContactImg src={ messengerIcon } alt="messenger" /> Aleksander
               Uniatowicz
            </ContactItem>
            <ContactItem title="Telefon">
               <ContactImg src={ phoneIcon } alt="Telefon" /> Zapytaj na mailu lub
               messengerze
            </ContactItem>
            <ContactItem title="Github" href="https://github.com/oleks12345/">
               <ContactImg src={ gitHubIcon } alt="GitHub" /> oleks12345
            </ContactItem>
            <ContactItem
               title="LinkedIn"
               href="https://www.linkedin.com/in/aleksander-uniatowicz-175650153/"
            >
               <ContactImg src={ linkedInIcon } alt="LinkedIn" /> Aleksander
               Uniatowicz
            </ContactItem>
            <ContactItem title="CV" href="cv.pdf">
               <ContactImg src={ cvIcon } alt="" /> Pobierz CV
            </ContactItem>
         </ContactWrapper>
      </StyledSection>
   );
};

export default Contact;
