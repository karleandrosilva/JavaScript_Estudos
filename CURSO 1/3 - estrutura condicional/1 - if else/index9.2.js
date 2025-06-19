const ladoA = 2;
const ladoB = 4;
const ladoC = 4;

// verifica se todos os lados são iguais
if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Triângulo Equilátero");
} else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) { // verifica se pelo menos dois lados são iguais
    console.log("Triângulo Isósceles");
} else { // se não for equilátero nem isósceles, é escaleno
    console.log("Triângulo Escaleno");
}