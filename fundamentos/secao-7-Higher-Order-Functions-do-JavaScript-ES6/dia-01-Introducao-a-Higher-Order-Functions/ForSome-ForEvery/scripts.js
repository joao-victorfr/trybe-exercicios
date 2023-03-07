const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((pessoa) => pessoa === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));