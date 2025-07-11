// MÓDULOS PARTE 3

// Em novas versoes do NODE.js, muda a parte de exportar e importar módulos
// agora é possível usar a sintaxe ES6, que é mais moderna e fácil de entender
// para isso, é necessário adicionar "type": "module" no package.json

// para importar, basta usar a palavra import

import { sum, sub } from "./10 - módulos/functions/math3.js" // passa o caminho do arquivo que deseja importar

console.log("A soma é: " + sum(10, 5));
console.log("A subtração é: " + sub(10, 5));