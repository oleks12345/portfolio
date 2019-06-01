import styled from 'styled-components';

export const ProjectWrapper = styled.div`
   width: 100%;
   padding: 10px;
   font-size: ${( { theme } ) => theme.font.size.s};
   ${( { theme } ) => theme.mdq.lg} {
      width: ${( { isBig } ) => ( isBig ? '100%' : '50%' )};
   }
`;
export const ProjectTitle = styled.h2`
   text-align: center;
   font-weight: ${( { theme } ) => theme.font.weight.regular};
`;
export const ProjectImage = styled.div`
   height: 500px;
   max-height: 50vw;
   width: 100%;
   background: center/contain no-repeat url(${( { src } ) => src}),
      ${( { theme } ) => theme.greyTransparent};
`;
export const ProjectAbout = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
`;
export const ProjectLinks = styled.div`
   flex-grow: 1;
   display: flex;
   flex-wrap: wrap;
   min-width: 250px;
`;
export const ProjectDescription = styled.p`
   width: 100%;
   ${( { theme } ) => theme.mdq.lg} {
      width: ${( { isBig } ) => ( isBig ? '50%' : '100%' )};
   }
`;
export const ProjectLink = styled.a`
   position: relative;
   flex-grow: 1;
   width: 50%;
   min-width: 200px;
   max-width: 400px;
   height: 50px;
   padding: 5px;
   font-weight: ${( { theme } ) => theme.font.weight.semibold};
   color: white;
   text-decoration: none;
   background-color: ${( { gh, lv, theme } ) => {
      if ( gh ) return theme.grey;
      if ( lv ) return theme.secondary;
   }};
   display: flex;
   align-items: center;
   justify-content: center;
   ${( { theme } ) => theme.mdq.lg} {
      max-width: none;
   }
   overflow: hidden;
   ::before,
   ::after {
      content: '';
      position: absolute;
      transition: transform 0.3s cubic-bezier(0.5, -0.2, 0.75, 0.72),
         opacity 0.3s cubic-bezier(0.5, -0.2, 0.75, 0.72);
      left: 0;
      top: 10%;
      width: 100%;
      height: 80%;
      transform: translateX(100%) scale(0.5);
      background-color: white;
      opacity: 0;
      z-index: 1;
   }
   ::after {
      transform: translateX(-100%) scale(0.5);
   }
   :hover:before {
      transform: translateX(calc(50% + 60px)) scale(1);
      opacity: 0.4;
   }
   :hover:after {
      opacity: 0.4;
      transform: translateX(calc(-50% - 60px)) scale(1);
   }
`;
export const ProjectLinkImg = styled.img`
   height: 100%;

   margin-right: 10px;
`;
