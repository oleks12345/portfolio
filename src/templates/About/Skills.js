import React from 'react';
import SkillSet from 'components/SkillSet/SkillSet';
import { skills } from 'assets/content/skills';

const skillSets = Object.keys( skills );

const Skills = () => {
   return (
      <div>
         {skillSets.map( ( skillKey ) => (
            <SkillSet key={ skills[skillKey].name } skillSet={ skills[skillKey] } />
         ) )}
      </div>
   );
};

export default Skills;
