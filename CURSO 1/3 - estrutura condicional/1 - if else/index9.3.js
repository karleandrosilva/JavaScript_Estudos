// Para poder solicitar um imput do usuário
const rl = require("node:readline"); // Importa o módulo readline do Node.js

// Cria uma interface de leitura para receber entradas do usuário   
const prompt = rl.createInterface({ //
    input: process.stdin, output: process.stdout
});

// Solicita ao usuário que digite sua idade
prompt.question("Digite sua idade: ", answer => {
    const age = Number.parseInt(answer); // Converte a resposta para um número inteiro, pois a entrada é uma string

    if (Number.isNaN(age)) { // Verifica se não é um número
        console.log("Por favor, digite um número válido.");
    } else {
        console.log("A sua iade é: " + age)
        console.log("Daqui a 10 anos, você terá: " + (age + 10) + " anos.");
    }
    prompt.close(); // Fecha a interface de leitura (finaliza)
})
    



