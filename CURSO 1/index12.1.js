// estrtura de reperição while

// while = enquanto
// A estrutura de repetição `while` executa um bloco de código enquanto uma condição for verdadeira.
// É útil quando não sabemos quantas vezes precisamos repetir algo, ou quando queremos repetir até que uma condição específica seja atendida.

// while (condição) {
//     // código a ser executado enquanto a condição for verdadeira
// }

let count = 0; // Inicializa um contador

while (count <= 10) {
    console.log(`Contagem: ${count}`); // Exibe o valor atual do contador
    count++; // Incrementa o contador em 1
}
console.log("Contagem finalizada!"); 

// Parte 2

let current;
let times = 0;
const excpected = 8; // Valor esperado para a contagem

while (current !== excpected) {
    current = Math.floor(Math.random() * (10+1)) // Gera um número aleatório entre 0 e 9
    console.log(current);
    times++; // Incrementa o contador de tentativas
}

console.log(`Foram necessárias ${times} tentativas para chegar ao número ${excpected}.`); // Exibe o número de tentativas