let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente : "Sim",
        personagem2: "Tio Patinhas",
        origem2: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
        nota2: 'O último MacPatinhas',
        recorrente2 : "Sim",
};


console.log("Bem vinda "+ info.personagem);

console.log(info.recorrente);

for(let key in info){
    console.log(key);
}

for(let key in info){
    console.log(info[key]);
}


console.log(info.personagem + " e "+ info.personagem2);
console.log(info.origem + " e "+ info.origem2);
console.log(info.nota + " e "+ info.nota2);
if(info.recorrente === info.recorrente2){
    console.log("Ambos recorrente");
}else{
    console.log(info.recorrente + " e "+ info.recorrente2);
}
