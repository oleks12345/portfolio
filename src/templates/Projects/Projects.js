import React from 'react';
import styled from 'styled-components';
import { StyledSection } from 'components/StyledSection/StyledSection';
import { ColorSecondary } from 'components/ColorSecondary/ColorSecondary';
import ProjectsSet from 'components/ProjectsSet/ProjectsSet';
import { projects } from 'assets/content/projects';

const ProjectsWrapper = styled.div`
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
`;
const Title = styled.h2`
   font-size: ${( { theme } ) => theme.font.size.l};
   text-transform: uppercase;
   text-align: center;
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
            <Title>
               Moje <ColorSecondary>Projekty</ColorSecondary>
            </Title>
            {createProjects( projects )}
         </ProjectsWrapper>
      </StyledSection>
   );
};

export default Projects;
