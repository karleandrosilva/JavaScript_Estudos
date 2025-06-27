// Conta de 0 a 20

let cont = 0;

while (cont <= 10) {
    console.log(cont);

    if (cont == 5){
        break; // faz com que quando chegue no 8, o programa para
    }

    cont++;
}

console.log("PARTE 2")

let c = 0;

while (c <= 10) {
    c ++

    if (c % 2 == 0) {
        console.log(c, "é par!");
        continue; // faz com que volte para o while e nao executa o que tem daqui para baixo
    }

    console.log(c, "é impar!");
}

// break = o codigo vai sair do loop
// continue = o codigo vai voltar para o comeco do loop e ignorar o que vem após o continue
