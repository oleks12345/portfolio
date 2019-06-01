import React from 'react';
import styled from 'styled-components';
import { StyledSection } from 'components/StyledSection/StyledSection';
import { StyledTitle } from 'components/StyledTitle/StyledTitle';
import { ColorSecondary } from 'components/ColorSecondary/ColorSecondary';
import ProjectsSet from 'components/ProjectsSet/ProjectsSet';
import { projects } from 'assets/content/projects';

const ProjectsWrapper = styled.div`
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
`;

const createProjects = ( projects ) =>
   projects.map( ( projectSet ) => {
      return (
         <ProjectsSet
            key={ projectSet.category }
            title={ projectSet.category }
            projectsList={ projectSet.projectsList }
         />
      );
   } );

const Projects = () => {
   return (
      <StyledSection id="projects">
         <ProjectsWrapper>
            <StyledTitle>
               Moje <ColorSecondary>Projekty</ColorSecondary>
            </StyledTitle>
            {createProjects( projects )}
         </ProjectsWrapper>
      </StyledSection>
   );
};

export default Projects;
