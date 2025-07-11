function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = { sum, sub }; // exporta as funções sum e sub como um objeto

// ou pode fazer desta forma:

module.exports = { // ou pode exportar um objeto com várias funções

    mult(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    }

}