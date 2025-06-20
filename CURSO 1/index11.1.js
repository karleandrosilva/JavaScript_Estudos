// estrutura de repetição for

// repetir o código até que uma condição seja atendida

// for (expressao de inicialização, condição de parada, execução){}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("Fim do loop!");

// decrementar o valor de i
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

console.log("Fim do loop!");

const numbers = [];

for (let i = 0; i <= 10; i++) {
    numbers.push(i);
}

console.log("Os números: " + numbers);

for (let i = 0; i <= 10; i++) {
    setTimeout(() => {console.log(i)}, 200 * i); // Adiciona o número ao array após um atraso
}