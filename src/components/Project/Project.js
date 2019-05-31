import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import githubIcon from 'assets/images/projects/links/github.svg';
import liveIcon from 'assets/images/projects/links/live.svg';

const ProjectWrapper = styled.div`
   width: 100%;
   padding: 10px;
   font-size: ${( { theme } ) => theme.font.size.s};
   ${( { theme } ) => theme.mdq.lg} {
      width: ${( { isBig } ) => ( isBig ? '100%' : '50%' )};
   }
`;
const ProjectTitle = styled.h2`
   text-align: center;
   font-weight: ${( { theme } ) => theme.font.weight.regular};
`;
const ProjectImage = styled.div`
   height: 500px;
   max-height: 50vw;
   width: 100%;
   background: center/contain no-repeat url(${( { src } ) => src}),
      ${( { theme } ) => theme.greyTransparent};
`;
const ProjectAbout = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
`;
const ProjectLinks = styled.div`
   flex-grow: 1;
   display: flex;
   flex-wrap: wrap;
   min-width: 250px;
`;
const ProjectDescription = styled.p`
   width: 100%;
   ${( { theme } ) => theme.mdq.lg} {
      width: ${( { isBig } ) => ( isBig ? '50%' : '100%' )};
   }
`;
const ProjectLink = styled.a`
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
      transition: transform 0.5s ease;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: translateX(100%);
      background-color: white;
      opacity: 0.2;
      z-index: 1;
   }
   ::after {
      transform: translateX(-100%);
   }
   :hover:before {
      transform: translateX(80%);
   }
   :hover:after {
      transform: translateX(-80%);
   }
`;
const ProjectLinkImg = styled.img`
   height: 100%;

   margin-right: 10px;
`;

const Project = ( { project } ) => {
   return (
      <ProjectWrapper isBig={ project.isBig }>
         <ProjectImage src={ project.img } alt="" />
         <ProjectTitle> {project.title}</ProjectTitle>
         <ProjectAbout>
            <ProjectDescription isBig={ project.isBig }>
               {project.desc.split( '<br>' ).map( ( text ) => (
                  <React.Fragment key={ text }>
                     {text}
                     <br />
                  </React.Fragment>
               ) )}
            </ProjectDescription>
            <ProjectLinks>
               {project.links.githubLink && (
                  <ProjectLink gh href={ project.links.githubLink }>
                     <ProjectLinkImg src={ githubIcon } alt="" />
                     Github
                  </ProjectLink>
               )}
               {project.links.liveLink && (
                  <ProjectLink lv href={ project.links.liveLink }>
                     <ProjectLinkImg src={ liveIcon } alt="Live" />
                     Live
                  </ProjectLink>
               )}
            </ProjectLinks>
         </ProjectAbout>
      </ProjectWrapper>
   );
};
Project.propTypes = {
   project: PropTypes.shape( {
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      isbig: PropTypes.bool,
   } ).isRequired,
};
export default Project;
