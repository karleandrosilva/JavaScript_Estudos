// estrutura para o usuario digitar no termianal 
const r = require("node:readline");
const prompt = r.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let name;

prompt.question("Qual o seu nome: ", aswer => { 
    name = aswer;
    prompt.close();
})

prompt.on("close", () =>{
    console.log("Seja bem vindo,", name);
})