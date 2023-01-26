let n = 5;
let quadrado = "";


if(n>1){
    for(let index = 1; index <= n; index += 1){
        quadrado += "*";
    }
    for(let index = 1; index<= n; index += 1){
       console.log(quadrado); 
    }
}