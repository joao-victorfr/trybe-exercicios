//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = "";
let menor = "";

for(let index = 0; index < array.length; index+=1){
    if(index === 0){
        maior = array[index];
        menor = array[index];
    }if(array[index].length >= maior.length){
        maior = array[index];
    }if(array[index].length <= menor.length){
        menor = array[index];
    }
}

console.log("A maior palavra é: "+ maior);
console.log("A menor palavra é: "+ menor);
