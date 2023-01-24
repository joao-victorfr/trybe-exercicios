//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

const num1 = 11;
const num2 = 15;
const num3 = 21;
let result = true;

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    result = true;
}else{
    result = false;
}

console.log(result);


//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.

if(num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
    result = true;
}else{
    result = false;
}

console.log(result);

//Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.

//Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

//valorCustoTotal = valorCusto + impostoSobreOCusto;
//lucro = valorVenda - valorCustoTotal (lucro de um produto);

const valorCusto = 10;
const valorVenda = 35;



if(valorCusto <= 0 && valorVenda <= 0){
    console.log("Erro");
}else{
    const valorCustoTotal = valorCusto + (valorCusto * 0.20);
    const lucro = (valorVenda - valorCustoTotal)*1000;
    console.log(lucro);
}

//Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//IR (Imposto de Renda)
//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.


let salarioBruto = 3500;

if(salarioBruto <= 1556.94){
    salarioBruto = salarioBruto - (salarioBruto * 0.08);
}if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBruto = salarioBruto - (salarioBruto * 0.09);
}if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBruto = salarioBruto - (salarioBruto * 0.11);
}if(salarioBruto > 5189.82){
    salarioBruto = salarioBruto - 570.88;
}

if (salarioBruto <= 1903.98) {
    salarioBruto = salarioBruto;
  } else if (salarioBruto <= 2826.65) {
    salarioBruto = salarioBruto - (salarioBruto * 0.075) - 142.80;
  } else if (salarioBruto <= 3751.05) {
    salarioBruto = salarioBruto - (salarioBruto * 0.15) - 354.80;
  } else if (salarioBruto <= 4664.68) {
    salarioBruto = salarioBruto - (salarioBruto * 0.225) - 636.13;
  } else {
    salarioBruto = salarioBruto - (salarioBruto * 0.275) - 869.36;
  };

  console.log(salarioBruto);