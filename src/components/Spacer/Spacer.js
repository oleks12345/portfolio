import styled from 'styled-components';
import spacerImg from 'assets/images/spacerImg.webp';

export const Spacer = styled.div`
   position: relative;
   height: 250px;
   min-height: 20vh;
   background: linear-gradient(
         45deg,
         rgba(59, 67, 76, 0.95) 0%,
         rgba(59, 67, 76, 0.9) 100%
      ),
      center/cover url(${spacerImg}) no-repeat,
      linear-gradient(
         90deg,
         rgba(59, 67, 76, 0.2) 0%,
         rgba(59, 67, 76, 0.2) 50%,
         rgba(200, 200, 200, 1) 50%,
         rgba(200, 200, 200, 1) 100%
      );

   ::before,
   ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      border-style: solid;
      border-width: 10px 100vw 0 0;
      border-color: ${( { theme } ) => theme.primary} transparent transparent
         transparent;
   }
   ::after {
      bottom: 0;
      border-width: 0 0 10px 100vw;
      border-color: transparent transparent ${( { theme } ) => theme.primary}
         transparent;
   }
   ${( { theme } ) => theme.mdq.md} {
      background-attachment: fixed;
      ::before {
         border-width: 30px 100vw 0 0;
      }
      ::after {
         border-width: 0 0 30px 100vw;
      }
   }
`;
