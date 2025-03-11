a = 5 == '5'
console.log(a); // (verdadeiro)

b = 5 === '5'; // (identico)
console.log(b); // (falso) -> pois compara tanto o tipo e o valor 

// ! -> negaçao (não/not)
// && -> conjução (e/and)
// || -> disjunção (ou/or)

// primeiro operadores aritmeticos (+ , -)
// segundo operadores relacionais (> , < )
// terceiro operadores lógicos (! , && , ||)

// operador ternário 

var media = 5.5

//             teste ?    true    : false
var ternario = media ? 'Aprovado' : 'Reprovado'
console.log(ternario)