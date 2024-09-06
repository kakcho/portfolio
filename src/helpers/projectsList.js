import project01 from "./../img/projects/image.png";
import project01Big from "./../img/projects/image.png";

import project02 from "./../img/projects/members.png";
import project02Big from "./../img/projects/members.png";

import project03 from "./../img/projects/3.png";


import project04 from "./../img/projects/4.png";

import project05 from "./../img/projects/5.png";

import project06 from "./../img/projects/6.png";

import project07 from "./../img/projects/7.jpg";
import project07Big from "./../img/projects/7Big.jpg";

const projects = [
  {
    title: "Фейк интерент магазин",
    skills: "React, Redux, API",
    link: "https://reactshopdemoa.netlify.app",
    img: project01,
    imgBig: project01Big,
    gitHubLink: "https://github.com/kakcho/reactStore.git",
  },
  {
    title: "Список участников команды",
    img: project02,
    link: "https://jocular-centaur-e49e78.netlify.app/",
    imgBig: project02Big,
    skills: "React, Redux, API",
    gitHubLink: "https://github.com/kakcho/memberList",
  },
  {
  	title: 'Конструктор футболок',
  	img: project03,
    link: "https://threejsaiapp.netlify.app/",
  	imgBig: project03,
  	skills: 'React, Node.js, Three js, Frame Motion, Tailwind',
  	gitHubLink: 'https://github.com/kakcho/threeJs',
  },
  {
  	title: 'Обобщение статьи с помощью CHAT-GPT 3.5',
  	img: project04,
    link: "https://summarizeaimaksim.netlify.app/",
  	imgBig: project04,
  	skills: 'React, Redux, Tailwind, CHAT-GPT',
  	gitHubLink: 'https://github.com/kakcho/ai_summarize',
  },
  {
  	title: 'Аналитика крипто портфеля',
  	img: project05,
    link: "https://cryptoanaliz.netlify.app/",
  	imgBig: project05,
  	skills: 'React, antDesign, ChartJS, fetch Api',
  	gitHubLink: 'https://github.com/kakcho/crypto'
  },
  {
  	title: 'Математический тренажер',
  	img: project06,
    link: "https://mattrainkwork.netlify.app/",
  	imgBig: project06,
  	skills: 'React, Node.js',
  	gitHubLink: 'https://github.com/kakcho/matTrain'
  },  
  {
  	title: 'Сайт с топом и графиками криптовалют',
  	img: project07,
    link: "#",
  	imgBig: project07Big,
  	skills: 'React & TS, react-chartjs-2, moment, axios',
  	gitHubLink: 'https://github.com/kakcho/cryptoUp'
  },
];

export { projects };
