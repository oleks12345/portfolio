import canis from 'assets/images/projects/canis.webp';
import mache from 'assets/images/projects/mache.webp';
import portfolio from 'assets/images/projects/portfolio.webp';
import newsWebsite from 'assets/images/projects/newsWebsite.webp';
import checkroom from 'assets/images/projects/innovativeProjects.webp';
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
            links: {
               liveLink: 'https://canis.wroclaw.pl'
            }
         }
      ]
   },
   {
      category: 'Projekty',
      projectsList: [
         {
            title: 'checkroom',
            img: checkroom,
            desc: `Projekt grupowy, aplikacja (frontend+backend) webowa, pozwalająca
            zarządzać pokojami, wyświetlać kiedy są zajęte, oraz pozwalać zarezerwować pokój.
            <br>
            Backend: nodejs + express, googleapis. moment, jest.
            <br>
            Frontend: React, Styled-components, moment, lodash, react-router.
            <br>
            Dev-ops: docker, heroku, travis-ci.<br>
            Aplikacja nadal w budowie.
            <br>
            Projekt tworzony w ramach projektu Innovative Projects by Nokia.
            Logo projektu Innovative Projects jest własnością Nokia Wrocław.`,
            links: {
               githubLink:
                  'https://github.com/nokia-wroclaw/innovativeproject-check-room'
            }
         },
         {
            title: 'newsWebsite',
            img: newsWebsite,
            desc: `Strona wyświetlająca artykuły z polskich serwisów informacyjnych pobrane z zewnętrznego API ( newsAPI.org )
               <br>
               Wykorzystane technologie: React, styled-components, react-router-dom
               <br>
               Wykorzystane narzędzia: npm, eslint, prettier, create-react-app
               <br>
               strona nadal w budowie, planowane dodanie innych podstron.`,
            links: {
               githubLink: 'https://github.com/oleks12345/newsWebsite',
               liveLink: 'https://oleks.pl/news'
            }
         },
         {
            title: 'Mache',
            img: mache,
            desc:
               'HTML to PSD <br>Strona wykonana na podstawie template psd<br>Wykorzystane technologie: bootstrap',
            links: {
               githubLink:
                  'https://github.com/oleks12345/Bootstrap-Projects/tree/master/Mache',
               liveLink: 'https://oleks.pl/mache'
            }
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
               liveLink: 'https://oleks.pl/'
            }
         }
      ]
   }
];
