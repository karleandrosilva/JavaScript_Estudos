// operador ternário

// (expressão) ? valor1 : valor2 
// ou
// (expressão) ? (se for verdadeiro) : (se for falso)

const number = 5;

console.log((number % 2 === 0) ? "É Par" : "É Ímpar"); // se o número for par, retorna "É par", caso seja falso, retorna "É ímpar"

// Esse vai ser par (true), pois 4 é divisível por 2
console.log((4 % 2 === 0) ? "É Par" : "É Ímpar");


const idade = 21;
console.log(idade >= 18 ? "Maior de idade" : "Menor de idade"); // Se a idade for maior ou igual a 18, retorna "Maior de idade", caso não, retorna "Menor de idade"

// EXEMPLO 1
const aprendeuJs = true;
const aprendeuNoYoutubeJs = true;

// para saber se a pessoa aprendeu JavaScript e se aprendeu no Youtube
console.log(aprendeuJs && aprendeuNoYoutubeJs ? "Aprendeu Javascript no Youtube" : "Não aprendeu Javascript no Youtube");


// EXEMPLO 2
const aprendeuPy = true;
const aprendeuNoYoutubePy = false;

// para saber se a pessoa aprendeu Python e se aprendeu no Youtube
console.log(aprendeuPy && aprendeuNoYoutubePy ? "Aprendeu Python no Youtube" : aprendeuPy ? "Aprendeu Python, mas não no Youtube" : "Não aprendeu Python");