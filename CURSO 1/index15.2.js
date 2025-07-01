// OBJETOS - PARTE 2

const computer = {
    marca : "Lenovo",
    modelo: "LOQ",
    processador: "Intel Core i5",

    armazenamento: {
        memoriaRam: "16GB",
        memoriaInterna: "512GB SSD",
    },
     especificacoes: {
        sistemaOperacional: "Windows 11",
        tecladoRetroiluminado: true,
    },

    programas: ["VS Code", "Chrome", "Spotify"],

    placaDeVideo: "RTX 2030",

    ram: [
        {
            tipo: "DDR4",
            tamanho: "8GB",
        },
        {
            tipo: "DDR4",
            tamanho: "16GB",
        }
    ]

}

console.log(computer.armazenamento.memoriaRam);
console.log(computer.programas.pop()); // remove o último programa do array
console.log(computer.ram)

console.log("Marca: " + computer.marca);
console.log("Modelo: " + computer.modelo);
console.log("Processador: " + computer.processador);
console.log("Memória RAM: ");

for(const ram of computer.ram) {
    console.log(ram.tipo, ram.tamanho);
}