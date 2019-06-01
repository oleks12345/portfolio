import React from 'react';
import PropTypes from 'prop-types';
import githubIcon from 'assets/images/projects/links/github.svg';
import liveIcon from 'assets/images/projects/links/live.svg';
import {
   ProjectWrapper,
   ProjectImage,
   ProjectTitle,
   ProjectAbout,
   ProjectDescription,
   ProjectLinks,
   ProjectLink,
   ProjectLinkImg,
} from 'components/Project/Project_styles';

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
                     GitHub
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
