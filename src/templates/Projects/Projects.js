import React from 'react';
import styled from 'styled-components';
import { ColorSecondary } from 'components/ColorSecondary/ColorSecondary';
import ProjectsSet from 'components/ProjectsSet/ProjectsSet';

const ProjectsSection = styled.section`
   color: ${( { theme } ) => theme.grey};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 50px 10%;
`;
const Title = styled.h2`
   font-size: ${( { theme } ) => theme.font.size.l};
   text-transform: uppercase;
   text-align: center;
`;

const Projects = () => {
   return (
      <ProjectsSection>
         <Title>
            Moje <ColorSecondary>Projekty</ColorSecondary>
         </Title>
         <ProjectsSet />
      </ProjectsSection>
   );
};

export default Projects;
