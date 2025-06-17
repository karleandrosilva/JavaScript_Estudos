// Para poder solicitar um imput do usuário
const rl = require("node:readline"); // Importa o módulo readline do Node.js

// Cria uma interface de leitura para receber entradas do usuário   
const prompt = rl.createInterface({ //
    input: process.stdin, output: process.stdout
});

let bank = 3000;
console.log(`Seu saldo é ${bank} reais.`);

// Solicita ao usuário que digite sua idade
prompt.question("Digite o valor que deseja tranferir: ", answer => {
    const amount = Number.parseInt(answer); 
    if (Number.isNaN(amount)) { // Verifica se não é um número
        console.log("Por favor, digite um número válido.");
    } else if (amount > bank) {
        console.log("Você não tem saldo suficiente para realizar essa transferência.");
    } else if (amount <= 0) {
        console.log("O valor da transferência deve ser maior que zero.");
    } else {
        bank = bank - amount; // Subtrai o valor da transferência do saldo
        console.log(`Transferência de ${amount} reais realizada com sucesso!`);
        console.log(`Seu novo saldo é ${bank} reais.`);
    }
    prompt.close(); // Fecha a interface de leitura (finaliza)
})
    



