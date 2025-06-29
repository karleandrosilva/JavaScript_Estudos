// FUNÇÕES

// permite reutilizar código, evitando repetição e facilitando a manutenção do código.

// function nomeDaFuncao(parametros) {
//     // código a ser executado
//}

function saudacao(nome) { // função saudacao recebe um parâmetro nome
    console.log(`Olá! Seja bem vindo, ${nome}!`);
}
saudacao("Karleandro"); // chamando a função


function sum(a, b) { // função soma recebe dois parâmetros a e b
    return "A soma de " + a + " e " + b + " resulta em: " +  (a + b); 
}
const resul = sum(10, 20);
console.log(resul); 


function multiply(a, b) { // função multiplicação recebe dois parâmetros a e b
    return a * b; 
}
const resul_mult = multiply(10, 20);
console.log("A multiplicação de 10 e 20 resulta em: " + resul_mult);

// função de flecha ou arrow function
// o comportamento é igual de uma variável, mas é uma função
// usar ela antes de declarar a variável

const divisaoA = (a, b) => {
    return a / b; 
}

// ou pode ser escrita de forma mais simples

const divisaoB = (a, b) => a / b; // não precisa do return

const resul_div = divisaoA(20, 10);
console.log(resul_div);

