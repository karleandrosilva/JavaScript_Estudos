// VARIÁVEIS

let nome = "Karle";
let idade = 15;
console.log("Meu nome é", nome, "e tenho", idade, "anos");

nome = "Karleandro";
idade = 20;
console.log("Meu nome é", nome, "e tenho", idade, "anos");

const sexo = "Masculino"; // const não muda

console.log(typeof nome); // typeof -> mostra o tipo
console.log(typeof idade);

let namora = false;
console.log(typeof namora); // boolean = true ou false

let semValor = null; // null - quando inicio algo nulo
console.log(typeof semValor);

let indefinido; // quando esqueço o valor
console.log(typeof indefinido);

// CONCATENAR
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);
console.log(nome + " " + sobrenome);
console.log(nome, sobrenome); // com virgula da espaço altomaticamente

// OPERAÇÕES ARITMÉRICAS

console.log(10 + 5); // soma
console.log(10 - 5); // subtração
console.log(10 * 5); // multiplicação
console.log(10 / 5); // divisão

// COMPARAÇÕES - retorna boolean
console.log(10 > 5); // maior
console.log(10 < 5); // menor

console.log(10 >= 10); // maior ou igual
console.log(10 <= 5); // menor ou igual
console.log(10 == 10); // igual

console.log(10 === "10"); // se o valor e o tipo são iguais