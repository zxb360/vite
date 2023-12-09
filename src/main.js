import { nanoid } from "nanoid";
import copy from "clipboard-copy";
import validator from "validator";
import "./style.css";
import "./style-seleto.css";

// console.log(nanoid());

const btnGera = document.querySelector("button");
const consoleInPassword = document.querySelector("h2");
const textEmail = document.querySelector("input");
const btnVal = document.querySelector("#btnValida");


btnGera.addEventListener("click", () => {
    const gerarPassword = nanoid();
    consoleInPassword.innerHTML = gerarPassword;
    alert("clique no campo da senha para copiar");
});

consoleInPassword.addEventListener("click", () => {
    copy(event.target.innerHTML);
    alert("copiado");
});

btnVal.addEventListener("click", () => {
    const valueText = textEmail.value;
    if (validator.isEmail(valueText)){
        alert("Email cadastrado com sucesso!!");
    } else {
        alert("Email incorreto");
    }
});
