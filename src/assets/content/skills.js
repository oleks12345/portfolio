import html from 'assets/images/skills/html-5.svg';
import css from 'assets/images/skills/css-3.svg';
import javascript from 'assets/images/skills/javascript.svg';
import react from 'assets/images/skills/react.svg';
import git from 'assets/images/skills/git-icon.svg';
import bootstrap from 'assets/images/skills/bootstrap-solid.svg';
import github from 'assets/images/skills/github-icon.svg';
import sass from 'assets/images/skills/sass.svg';
import code from 'assets/images/skills/vsc.svg';
import bem from 'assets/images/skills/bem.svg';
import styled from 'assets/images/skills/styled components.png';
import express from 'assets/images/skills/express.svg';
import nodejs from 'assets/images/skills/nodejs-icon.svg';
import mongodb from 'assets/images/skills/mongodb.svg';

export const skills = {};
skills.skills = {
   name: 'Umiejętności',
   content: [
      {
         icon: html,
         name: 'html',
      },
      {
         icon: css,
         name: 'css',
      },
      {
         icon: javascript,
         name: 'javascript',
      },
      {
         icon: react,
         name: 'react',
      },
      {
         icon: git,
         name: 'git',
      },
   ],
};
skills.tolls = {
   name: 'Narzedzia i metodologie',
   content: [
      {
         icon: github,
         name: 'github',
      },
      {
         icon: code,
         name: 'visual studio code',
      },
      {
         icon: styled,
         name: 'styled-components',
      },
      {
         icon: bem,
         name: 'BEM',
      },
      {
         icon: sass,
         name: 'sass',
      },
      {
         icon: bootstrap,
         name: 'bootstrap4',
      },
   ],
};
skills.learning = {
   name: 'Aktualnie uczę się',
   content: [
      {
         icon: nodejs,
         name: 'node.js',
      },
      {
         icon: express,
         name: 'express',
      },
      {
         icon: mongodb,
         name: 'mongoDB',
      },
   ],
};
