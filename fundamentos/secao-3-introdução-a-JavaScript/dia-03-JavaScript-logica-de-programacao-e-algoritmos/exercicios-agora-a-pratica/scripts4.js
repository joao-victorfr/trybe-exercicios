//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let numeroFinal = 50;
let numerosPrimos = [];
let maior = 0;

for(let index = numeroFinal; index >= 2; index-=1){
    let contador = 0;
    for(let secondIndex = 1; secondIndex <= index; secondIndex+=1){
        if(index%secondIndex === 0){
            contador+=1;
        }
    }
    if(contador==2){
        numerosPrimos.push(index);
    }
}

for(let index = 0; index < numerosPrimos.length; index+=1){
    if(numerosPrimos[index]>maior){
        maior = numerosPrimos[maior];
    }
}

console.log(maior);