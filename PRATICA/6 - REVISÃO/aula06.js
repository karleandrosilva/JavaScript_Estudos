let produto = 'Arroz';
let quant = 2;
let precoUnitario = 4.99;
let precoTotal = quant * precoUnitario
console.log('Preço total R$'+precoTotal);

// const não muda
const nome = 'Karleandro'; 
const peso = 60;
const altura = 1.78;
const imc = peso / (altura * altura);
console.log('IMC: ', imc.toFixed(2));

let nota1 = 7.5;
let nota2 = 5.5;
let nota3 = 4.0;
let notaFinal = nota1 + nota2 + nota3;

console.log("Nota final:", notaFinal);

let compra = 1999.99;
let desconto = 145.42;
let compraComDesconto = compra - desconto;

console.log("A compra deu R$"+ compraComDesconto);