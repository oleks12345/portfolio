import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skill from 'components/Skill/Skill';

const SkillSetHeader = styled.h3`
   text-align: center;
   font-size: ${( { theme } ) => theme.font.size.m};
`;
const SkillsList = styled.ul`
   padding: 10px 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
`;
const createSkillsList = ( skillList ) =>
   skillList.map( ( skill ) => <Skill key={ skill.name } skill={ skill } /> );
const SkillSet = ( { skillSet } ) => {
   return (
      <div>
         <SkillSetHeader>{skillSet.name}</SkillSetHeader>
         <SkillsList>{createSkillsList( skillSet.content )}</SkillsList>
      </div>
   );
};
SkillSet.propTypes = {
   skillSet: PropTypes.shape( {
      name: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
         PropTypes.shape( {
            icon: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
         } )
      ).isRequired,
   } ).isRequired,
};
export default SkillSet;
