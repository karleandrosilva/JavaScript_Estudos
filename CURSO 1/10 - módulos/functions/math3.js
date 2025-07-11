// MÓDULOS PARTE 3

// Em novas versoes do NODE.js, muda a parte de exportar e importar módulos
// agora é possível usar a sintaxe ES6, que é mais moderna e fácil de entender
// para isso, é necessário adicionar "type": "module" no package.json

// Basta só colocar a palavra export antes da função ou variável que deseja exportar

export function sum(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// tambem pode exportar várias funções de uma vez só
//export { sum, sub };