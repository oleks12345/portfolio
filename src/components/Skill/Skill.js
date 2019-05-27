import React from 'react';
import PropTypes from 'prop-types';

const Skill = ( { skill } ) => {
   return (
      <li>
         <img src={ skill.icon } alt="" />
         <div>{skill.name}</div>
      </li>
   );
};
Skill.propTypes = {
   skill: PropTypes.shape( {
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
   } ).isRequired,
};
export default Skill;
