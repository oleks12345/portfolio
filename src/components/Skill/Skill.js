import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SkillWrapper = styled.li`
   display: flex;
   flex-direction: column;
   text-align: center;
   justify-content: space-between;
   padding: 15px;
   width: 50%;
   min-width: 120px;
   max-width: 200px;
`;
const SkillImg = styled.img`
   width: 100%;
   height: auto;
`;
const SkillTitle = styled.p`
   text-transform: capitalize;
`;

const Skill = ( { skill } ) => {
   return (
      <SkillWrapper>
         <SkillImg src={ skill.icon } alt="" />
         <SkillTitle>{skill.name}</SkillTitle>
      </SkillWrapper>
   );
};
Skill.propTypes = {
   skill: PropTypes.shape( {
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
   } ).isRequired,
};
export default Skill;
