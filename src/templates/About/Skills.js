import React from 'react';
import styled from 'styled-components';
import SkillSet from 'components/SkillSet/SkillSet';
import { skills } from 'assets/content/skills';

const skillSets = Object.keys( skills );

const SkillsWrapper = styled.div`
   width: 100%;
   max-width: ${( { theme } ) => theme.maxWidth};
`;

const Skills = () => {
   return (
      <SkillsWrapper>
         {skillSets.map( ( skillKey ) => (
            <SkillSet key={ skills[skillKey].name } skillSet={ skills[skillKey] } />
         ) )}
      </SkillsWrapper>
   );
};

export default Skills;
