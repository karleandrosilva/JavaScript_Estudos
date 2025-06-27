// Para poder solicitar um imput do usuário
const rl = require("node:readline"); // Importa o módulo readline do Node.js

// Cria uma interface de leitura para receber entradas do usuário   
const prompt = rl.createInterface({ //
    input: process.stdin, output: process.stdout
});

// funcao nomeDaFuncao(parametro) {
// }

function question(query) {
    return new Promise((resolve) =>{
        prompt.question(query, resolve);
    })
}

// função principal
async function main() {
    let number;

    // do while = executar o bloco de código primeiro, antes de verificar o while

    do { 
        const answer = await question("Digite um número qualquer: ");
        number = Number.parseInt(answer);

        if (Number.isNaN(number)) {
            console.log("O que você digitou é invalido")
        }

    } while (Number.isNaN(number));

    prompt.close();

    console.log("Você digitou: " + number)
    
}

main();