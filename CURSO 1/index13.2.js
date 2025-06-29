// parte 2

// 1. Crie uma função que recebe um número e retorna o fatorial desse número.

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

const resul = factorial(5);
console.log(resul); 

// função IIFE
function greet(name) {
    console.log(`Olá, ${name}!`);
}

// mesma função escrita como IIFE
((name) => {
    console.log(`Olá, ${name}!`);
})("Karleandro"); // chamando a função imediatamente com o parâmetro "Karleandro"   