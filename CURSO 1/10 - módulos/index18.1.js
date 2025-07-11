// módulos - parte 1

// é um arquivo que contem um codigo isolado, que pode ser importado por outros arquivos

// pode ter variaveis, funçoes ou classes

// exporta o que quiser, mas é bom exportar somente o que for necessário

// para poder acessar a função neste arquivo, é necessário importar o módulo

// pode chamar a variavel pelo nome que quiser, mas é bom manter o mesmo nome do arquivo
// require = é uma funçao global do node.js que importa módulo
const math = require("./functions/math") // passa o caminho do arquivo que deseja importar

// tambem pode usar a desestruturação para importar somente o que for necessário
// const { sum } = require("./10 - módulos/functions/math") /

console.log(math.sum(4, 5)); // chama a função sum do módulo math, que foi importado