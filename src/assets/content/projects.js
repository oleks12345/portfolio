import canis from 'assets/images/projects/canis.webp';
import mache from 'assets/images/projects/mache.webp';
import portfolio from 'assets/images/projects/portfolio.webp';
// import placeholder from 'assets/images/projects/placeholder.svg';

export const projects = [
   {
      category: 'Projekty Komercyjne',
      projectsList: [
         {
            title: 'canis',
            img: canis,
            desc: `Strona wykonana dla wrocławskiego weterynarza. <br>
               Zakres: Projekt i budowa strony, deployment  <br>
               Wykorzystane technologie: Sass  <br>
               CSS w metodologii BEM`,
            isBig: true,
            links: {
               liveLink: 'https://canis.wroclaw.pl',
            },
         },
      ],
   },
   {
      category: 'Projekty Własne',
      projectsList: [
         {
            title: 'Mache',
            img: mache,
            desc:
               'HTML to PSD <br>Strona wykonana na podstawie template psd<br>Wykorzystane technologie: bootstrap',
            links: {
               githubLink:
                  'https://github.com/oleks12345/Bootstrap-Projects/tree/master/Mache',
               liveLink: 'https://oleks.pl/mache',
            },
         },
         {
            title: 'Portfolio',
            img: portfolio,
            desc: `Moje portfolio w React 
               <br>
               Wykorzystane technologie: React, styled-components 
               <br>
               Wykorzystane narzędzia: npm, eslint, prettier, create-react-app`,
            links: {
               githubLink: 'https://github.com/oleks12345/portfolio',
               liveLink: 'https://oleks.pl/',
            },
         },
      ],
   },
];
