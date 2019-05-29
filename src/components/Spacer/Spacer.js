import styled from 'styled-components';
import spacerImg from 'assets/images/spacerImg.webp';

export const Spacer = styled.div`
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
   ${( { theme } ) => theme.mdq.md} {
      background-attachment: fixed;
   }
`;
