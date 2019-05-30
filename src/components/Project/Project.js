import React from 'react';
import styled from 'styled-components';
import placeholder from 'assets/images/projects/placeholder.svg';

const ProjectTitle = styled.h2`
   font-weight: ${( { theme } ) => theme.font.weight.regular};
`;

const Project = () => {
   return (
      <div>
         <ProjectTitle> Placeholder title </ProjectTitle>
         <img src={ placeholder } alt="" />
      </div>
   );
};

export default Project;
