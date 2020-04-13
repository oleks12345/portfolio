import html from 'assets/images/skills/html-5.svg';
import css from 'assets/images/skills/css-3.svg';
import javascript from 'assets/images/skills/javascript.svg';
import react from 'assets/images/skills/react.svg';
import git from 'assets/images/skills/git-icon.svg';
import cpp from 'assets/images/skills/cpp.svg';
import express from 'assets/images/skills/express.svg';
import nodejs from 'assets/images/skills/nodejs-icon.svg';
import mongodb from 'assets/images/skills/mongodb.svg';

import bootstrap from 'assets/images/skills/bootstrap-solid.svg';
import github from 'assets/images/skills/github-icon.svg';
import sass from 'assets/images/skills/sass.svg';
import code from 'assets/images/skills/vsc.svg';
import bem from 'assets/images/skills/bem.svg';
import styled from 'assets/images/skills/styled components.png';
import babel from 'assets/images/skills/babel.svg';
import eslint from 'assets/images/skills/eslint.svg';
import prettier from 'assets/images/skills/prettier.svg';
import npm from 'assets/images/skills/npm.svg';

import nginx from 'assets/images/skills/nginx.svg';
import jenkins from 'assets/images/skills/jenkins.svg';
import apache from 'assets/images/skills/apache.svg';

export const skills = {};
skills.skills = {
   name: 'Umiejętności',
   content: [
      {
         icon: javascript,
         name: 'javascript'
      },
      {
         icon: react,
         name: 'react'
      },
      {
         icon: nodejs,
         name: 'node.js'
      },
      {
         icon: express,
         name: 'express'
      },
      {
         icon: cpp,
         name: 'C++'
      },
      {
         icon: git,
         name: 'git'
      },
      {
         icon: mongodb,
         name: 'mongoDB'
      },
      {
         icon: html,
         name: 'html'
      },
      {
         icon: css,
         name: 'css'
      }
   ]
};
skills.tools = {
   name: 'Narzędzia i metodologie',
   content: [
      {
         icon: github,
         name: 'github'
      },
      {
         icon: sass,
         name: 'sass'
      },
      {
         icon: styled,
         name: 'styled-components'
      },
      {
         icon: bem,
         name: 'BEM'
      },
      {
         icon: code,
         name: 'visual studio code'
      },
      {
         icon: bootstrap,
         name: 'bootstrap4'
      },
      {
         icon: babel,
         name: 'babel'
      },
      {
         icon: eslint,
         name: 'eslint'
      },
      {
         icon: prettier,
         name: 'prettier'
      },
      {
         icon: npm,
         name: 'npm'
      }
   ]
};

skills.used = {
   name: 'Miałem okazję korzystać z',
   content: [
      {
         icon: nginx,
         name: 'nginx web server'
      },
      {
         icon: jenkins,
         name: 'jenkins cI'
      },
      {
         icon: apache,
         name: 'apache web server'
      }
   ]
};
