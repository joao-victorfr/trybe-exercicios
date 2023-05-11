const myFizzBuzz = require('./myFizzBuzz.js');
describe('testa a função myFuzzBuzz', () => {
  it('deve retornar a string correta', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
});