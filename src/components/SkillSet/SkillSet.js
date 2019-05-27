import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SkillSetHeader = styled.h3`
   text-align: center;
   font-size: ${( { theme } ) => theme.font.size.m};
`;

const SkillSet = ( { skillSet } ) => {
   return (
      <div>
         <SkillSetHeader>{skillSet.name}</SkillSetHeader>
      </div>
   );
};
SkillSet.propTypes = {
   skillSet: PropTypes.shape( {
      name: PropTypes.string.isRequired,
      content: PropTypes.shape( {
         icon: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
      } ).isRequired,
   } ).isRequired,
};
export default SkillSet;
