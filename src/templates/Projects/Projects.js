import React from 'react';
import styled from 'styled-components';
import { ColorSecondary } from 'components/ColorSecondary/ColorSecondary';
import ProjectsSet from 'components/ProjectsSet/ProjectsSet';
import { projects } from 'assets/content/projects';

const ProjectsSection = styled.section`
   color: ${( { theme } ) => theme.grey};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 50px 10%;
`;
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
      <ProjectsSection>
         <ProjectsWrapper>
            <Title>
               Moje <ColorSecondary>Projekty</ColorSecondary>
            </Title>
            {createProjects( projects )}
         </ProjectsWrapper>
      </ProjectsSection>
   );
};

export default Projects;
