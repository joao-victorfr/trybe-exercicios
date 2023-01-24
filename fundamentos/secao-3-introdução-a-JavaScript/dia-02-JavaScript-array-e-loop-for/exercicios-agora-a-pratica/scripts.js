let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica = 0;
let maiorValor = 0;
let menorValor = 0;
let qntdImpar = 0;
let novoArray = [];

for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
    soma = soma + numbers[index];
}
console.log("soma dos números: "+ soma);

mediaAritmetica = soma/numbers.length;

console.log("A média aritmética dos valores é: "+ mediaAritmetica);

if(mediaAritmetica > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor ou igual a 20");
}

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index]>maiorValor){
        maiorValor = numbers[index];
    }

    if(numbers[index]%2!==0){
        qntdImpar += 1;
    }
}

console.log("O maior valor é: "+ maiorValor);

if(qntdImpar>0){
    console.log("Existe "+ qntdImpar + " números impares")
}else{
    console.log("nenhum valor ímpar encontrado")
}

menorValor = maiorValor;

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index]<menorValor){
        menorValor = numbers[index];
    }
}

console.log("O menor valor é: "+ menorValor);

for(let index = 0; index < 25; index += 1){
    novoArray.push(index+1);
}

for(let index = 0; index < 25; index += 1){
    console.log(novoArray[index]);
}