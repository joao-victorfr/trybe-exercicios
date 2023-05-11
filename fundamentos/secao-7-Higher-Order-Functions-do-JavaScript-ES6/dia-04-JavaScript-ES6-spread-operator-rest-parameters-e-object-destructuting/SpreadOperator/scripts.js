// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pêra', 'uva', 'mamão'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  let newFruit = [];
  return newFruit = [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));