let n = 5;
let triangulo = "";
let contador = 1;
let asterisco = "*";


/*while(n>=1){
    if(n === 5){
        for(let index = n; index >= 1; index -= 1){
            triangulo += "*";
        }
        console.log(triangulo);
    }else{
        triangulo = ""
        for(let index = n; index >= 1; index -= 1){
            triangulo += "*";
        }
        console.log(triangulo);
    }
    n -= 1;
}*/

if(n>1){
    for(let index = 1; index <= n; index += 1){
       let espaco = n - contador;
        for(let secondIndex = 1; secondIndex <= espaco; secondIndex+=1){
            triangulo+=" ";
        }
        for(let secondIndex = 1; secondIndex <= contador; secondIndex+=1){
            triangulo+=asterisco;
        }
        console.log(triangulo);
        triangulo = "";
        contador+=1;
    }
}