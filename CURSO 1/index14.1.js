// PARTE 1
//arrays = estrtura de dados que permitem armazenar uma coleção de valores em uma única variável.

const numbers = [1, 2, 3, 4, 5]; // array de números
console.log(numbers); // [1, 2, 3, 4, 5]

// para acessar um elemento do array, usamos o índice (começa em 0)

const fruits = ["maçã", "banana", "laranja"]; // array de strings
console.log(fruits[0]); // 1

// modificar um elemento do array
fruits[1] = "uva"; // substitui "banana" por "uva"
console.log(fruits); // ["maçã", "uva", "laranja"]

//  MÉTODOS DE ARRAY

// push = adiciona um elemento ao final do array
fruits.push("abacaxi"); // adiciona "abacaxi" ao final do array
console.log(fruits); // ["maçã", "uva", "laranja", "

// lenhgth = Tamanho do array
console.log(fruits.length); // 4

// pop = remove o último elemento do array
fruits.pop(); // remove "abacaxi"
console.log(fruits); // ["maçã", "uva", "laranja"]

// shift = remove o primeiro elemento do array
fruits.shift(); // remove "maçã"
console.log(fruits); // ["uva", "laranja"]

// unshift = adiciona um elemento no início do array
fruits.unshift("morango"); // adiciona "morango" no início do array
console.log(fruits); // ["morango", "uva", "laranja"]

// push = adiciona um elemento ao final do array
// pop = remove o último elemento do array

// shift = remove o primeiro elemento do array
// unshift = adiciona um elemento no início do array