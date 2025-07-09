// função de soma

// sera usada em outros arquivos

function sum(a, b) {
    return a + b;
}

// para exportar para outros arquivos:
    // primeiro método:

module.exports = { sum } // sintaxe comumjs
// exporta a função sum como um objeto, para poder importar em outros arquivos