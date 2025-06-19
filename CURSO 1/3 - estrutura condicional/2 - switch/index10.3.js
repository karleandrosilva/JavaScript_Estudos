// Para poder solicitar um imput do usuário
const rl = require("node:readline"); // Importa o módulo readline do Node.js

// Cria uma interface de leitura para receber entradas do usuário   
const prompt = rl.createInterface({ //
    input: process.stdin, output: process.stdout
});

console.log("Bem vinso ao programa!");
console.log("[1] - Data atual");
console.log("[2] - Horario atual");
console.log("[3] - Ver animais");
console.log("[4] - Ver frutas");
console.log("[5] - Ver linguagens");
console.log("[0] - Sair");

prompt.question("Digite o número da opção desejada: ", answer => {
    const option = Number.parseInt(answer); // Converte a resposta para um número inteiro

    switch (option) {
        case 1: {
            console.log(`Data atual: ${new Date().toLocaleDateString()}`);
            break;
        }
        case 2: {
            console.log(`Horário atual: ${new Date().toLocaleTimeString()}`);
            break;
        }
        case 3: {
            console.log("Animais: cachorro, gato, vaca, cavalo");
            break;
        }
        case 4: {
            console.log("Frutas: maçã, banana, laranja, uva");
            break;
        }
        case 5: {
            console.log("Linguagens: JavaScript, Python, Java, C++");
            break;
        }
        case 0: {
            console.log("Saindo do programa...");
            break;
        }
        default: {
            console.log("Opção inválida. Por favor, tente novamente.");
            break;
        }
    }

    prompt.close(); // Fecha a interface de leitura (finaliza)
})