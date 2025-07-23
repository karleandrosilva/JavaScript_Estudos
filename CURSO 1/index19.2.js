import { intro, outro, text } from "@clack/prompts"
import chalk from "chalk"

async function main(){
    
    intro(chalk.green("Bem vindo ao programa")) // para poder printar
    
    const name = await text({message: "Qual é o seu nome: "}); // para receber
    
    outro(`olá ${name}`)
}

main();