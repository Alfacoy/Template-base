//Imports
import '../scss/index.scss';
import imagen from '../img/sushiMochi.jpg';


const container = document.querySelector('#root')
//Title
const title = document.createElement('h1');
const hello = document.createTextNode('¡Hello World!');
title.appendChild(hello)
//Image
const img = document.createElement('img');
img.src = imagen;
//Image Info
const imgInfo = document.createElement('p');
const sushiMochi = document.createTextNode('Mochi and Sushi <3');
imgInfo.appendChild(sushiMochi);

//Render
container.appendChild(title);
container.appendChild(img);
container.appendChild(imgInfo);


