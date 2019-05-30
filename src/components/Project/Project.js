import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
   width: 100%;

   font-size: ${( { theme } ) => theme.font.size.s};
   ${( { theme } ) => theme.mdq.md} {
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

const ProjectDescription = styled.p`
   width: ${( { isBig } ) => ( isBig ? '50%' : '100%' )};
`;

const Project = ( { project } ) => {
   return (
      <ProjectWrapper isBig={ project.isBig }>
         <ProjectImage src={ project.img } alt="" />

         <ProjectTitle> {project.title}</ProjectTitle>
         <ProjectDescription>
            {project.desc.split( '<br>' ).map( ( text ) => (
               <>
                  {text}
                  <br />
               </>
            ) )}
         </ProjectDescription>
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
