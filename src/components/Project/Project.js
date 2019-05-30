import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectTitle = styled.h2`
   font-weight: ${( { theme } ) => theme.font.weight.regular};
`;

const Project = ( { project } ) => {
   return (
      <div>
         <ProjectTitle> {project.title}</ProjectTitle>
         <img src={ project.img } alt="" />
      </div>
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
