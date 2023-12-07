import { nanoid } from "nanoid";

import copy from "clipboard-copy";

// console.log(nanoid());

const btnGera = document.querySelector("button");

const consoleInPassword = document.querySelector("h2");

btnGera.addEventListener("click", () => {
    const gerarPassword = nanoid();
    consoleInPassword.innerHTML = gerarPassword;
});

consoleInPassword.addEventListener("click", () => {
    copy(event.target.innerHTML);
    alert("copiado");
});