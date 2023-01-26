let n = 5;
let triangulo = "*";


/*if(n>1){
    for(let index = n; index >= n; index -= 1){
        triangulo += "*";
    }*/

if(n>1){
    for(let index = 1; index <= n; index += 1){
        if(index === 1){
            console.log(triangulo); 
        }else{
            triangulo += "*";
            console.log(triangulo);
       }
    }
}