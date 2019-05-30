import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Project from 'components/Project/Project';

const Title = styled.h2`
   font-size: ${( { theme } ) => theme.font.size.m};
`;
const createProjectsList = ( projectsList ) =>
   projectsList.map( ( project ) => (
      <Project key={ project.title } project={ project } />
   ) );

const ProjectsSet = ( { title, projectsList } ) => {
   return (
      <div>
         <Title>{title}</Title>
         {createProjectsList( projectsList )}
      </div>
   );
};

ProjectsSet.propTypes = {
   title: PropTypes.string.isRequired,
   projectsList: PropTypes.arrayOf(
      PropTypes.shape( {
         title: PropTypes.string.isRequired,
         img: PropTypes.string.isRequired,
         desc: PropTypes.string.isRequired,
         isbig: PropTypes.bool,
      } )
   ).isRequired,
};
export default ProjectsSet;
