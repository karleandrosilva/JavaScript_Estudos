// FOR = para

for (let i = 1; i <= 5; i++){ // i++ = incrementa + 1
    document.write(i + "-"); // conta até 5
}

document.write("<br>");

for (let i = 5; i >= 1; i--){ // i-- = decrementa - 1
    document.write(i + "-"); // conta de 5 até 1
}

document.write("<br>");

let carros = ['Fusca', 'Brasília', 'Gurgel'];

for (let i = 0; i < carros.length; i++){  // lengh = quantidade de elementos
    document.write(`<li>${carros[i]}</li>`); // percorre o array
}

document.write("<br>");

// FOREACH = forEach = para cada - > para percorrer array tambem (FORMA SIMPLIFICADA)
let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia'];

frutas.forEach(function(fruta) {
    document.write(`<li>${fruta}</li>`);
})

document.write("<br>");

frutas.forEach(function(fruta, i) { // com indice
    document.write(`<li>${i} - ${fruta} </li>`);
})

// WHILE = enquanto

let cont = 0; // precisa criar o contador antes

while (cont < frutas.length) {
    console.log(frutas[cont]);
    cont++; // incremento
}

// DO WHILE = faca enquanto

let interador = 0;

do { // executa pelo menos uma vez
    console.log(carros[interador]);
    interador++;
} while (interador < carros.length)