import { nanoid } from 'nanoid';

// console.log(nanoid());

// Código main.js está correto, o problema foi o arquivo .html estavá com outro nome

const passowrd = document.querySelector('button');

const displayPass = document.querySelector('h3');


passowrd.addEventListener('click', () => {
    const randownPass = nanoid();
    displayPass.innerHTML = randownPass;
//     console.log("button");
});
