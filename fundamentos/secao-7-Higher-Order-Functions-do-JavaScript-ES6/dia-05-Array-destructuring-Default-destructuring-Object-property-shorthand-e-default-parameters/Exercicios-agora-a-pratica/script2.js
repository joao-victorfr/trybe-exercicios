const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixoe

const toObject = ([nome, marca, ano]) => ({nome, marca, ano});

const newPalio = toObject(palio);
console.log(newPalio);