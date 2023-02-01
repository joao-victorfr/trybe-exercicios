const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "red";

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

let primeiroFilho = pai.firstElementChild;

primeiroFilho = elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilho);

const text = elementoOndeVoceEsta.parentNode.nextSibling;
console.log(text)

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
terceiroFilho = elementoOndeVoceEsta.parentNode.lastElementChild.previousElementSibling;
console.log(terceiroFilho)