import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SkillWrapper = styled.li`
   display: flex;
   flex-direction: column;
   text-align: center;
   padding: 15px;
   width: 50%;
   min-width: 120px;
   max-width: 200px;
`;
const SkillImg = styled.img`
   width: 100%;
   height: auto;
`;

const Skill = ( { skill } ) => {
   return (
      <SkillWrapper>
         <SkillImg src={ skill.icon } alt="" />
         <p>{skill.name}</p>
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
