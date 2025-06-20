// quantas vezes a letra "a" aparece na string

const text = "Karleandro Santos da Silva";
const letter = "a";
let times = 0;

// for of
for (const char of text.toLowerCase()){
    if (char === letter) times++;
} // vai passar por cada letra da string

console.log(`A letra "${letter}" aparece ${times} vezes no texto: ${text}.`);

// .toLowerCase() = faz com que a string fique toda em minúsculas

console.log("PARTE 4");

// Para poder solicitar um imput do usuário
const rl = require("node:readline"); // Importa o módulo readline do Node.js

// Cria uma interface de leitura para receber entradas do usuário   
const prompt = rl.createInterface({ //
    input: process.stdin, output: process.stdout
});

prompt.question("Qual o número deseja ver a tabuada: ", answer => {
    const num = Number.parseInt(answer); // Converte a resposta para um número inteiro
    
    

    if (isNaN(num)) {
        console.log("Por favor, insira um número válido.");
    } else if (num >= 1) {
        console.log("Tabuada do : " + num);
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    } else {
        console.log("Por favor, insira um número entre 1 e infiinito.");
    }

    prompt.close(); // Fecha a interface de leitura (finaliza)
});
