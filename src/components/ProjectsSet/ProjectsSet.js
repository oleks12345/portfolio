import React from 'react';
import styled from 'styled-components';
import Project from 'components/Project/Project';

const Title = styled.h2`
   font-size: ${( props ) => props.theme.font.size.m};
`;

const ProjectsSet = () => {
   return (
      <div>
         <Title>Komercyjne</Title>
         <Project />
      </div>
   );
};

export default ProjectsSet;
