const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui
const divisivel = numbers.find((element) => element % 3 === 0 && element % 5 === 0);

console.log(divisivel);