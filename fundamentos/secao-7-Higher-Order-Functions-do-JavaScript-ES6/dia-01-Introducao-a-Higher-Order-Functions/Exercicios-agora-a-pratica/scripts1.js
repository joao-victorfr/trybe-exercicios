const numbers = [1];
const drawnNumber = Math.floor(Math.random() * 5);

const raffle = (array, number) => {
  return array.some((element) => element === number);
}

const result = raffle(numbers, drawnNumber);
const compare = result === true ? "Parabéns, você ganhou" : "Tente novamente";
console.log(compare);