// CAMINHOS

// para poder importar as funções de soma e subtração, terá que passar o caminho relativo até ela.

// . e ./ = esta acessando o mesmo diretório do arquivo

import { sub } from "../functions/math/sub.js"
import { sum } from "../functions/math/sum.js"

console.log(sub(10, 5));
console.log(sum(10,5));