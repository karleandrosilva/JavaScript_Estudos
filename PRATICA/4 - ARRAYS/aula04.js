let comidas = ['Macarrão', 'Feijoada', 'Salada'];
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];
var codigos = Array(10, 20, 30); // não é muito usado

// Adicionar no final -> push (empurre)
comidas.push('Carne');
meses.push('Maio', 'Junho', 'Julho', '08')
codigos.push(40, 50, 60);

console.log(comidas);

// Remover do final -> pop (estourar)
comidas.pop();
meses.pop();

console.log(comidas);

// Adicionar no inicio -> unshift
comidas.unshift('Arroz', 'Feijão');

console.log(comidas);

// Remover do inicio -> shift
comidas.shift();

console.log(comidas);

//  Removere de uma posição especifica -> splice (emendar)
console.log(codigos);
codigos.splice(1, 3); // (posição inicial | quantos remover)
console.log(codigos);

// Copiar o array -> slice (fatiar porção)
let meses1 = meses.slice();
let meses2 = meses.slice(1, 6); // (posição inicial | quantos copiar)

console.log(meses1);
console.log(meses2);

// Ver tamanho do array
console.log(meses.length);

var test = Array(10);
test[0] = "Oi";
test[1] = "Blz";
console.log(test[0]);

// editar
meses[0] = "Jan"
console.log(meses);

// spreped operator -> ... (copia e adiciona novos)
let teste = [...comidas, 'Maionese', 'Carne']; 
console.log(teste);