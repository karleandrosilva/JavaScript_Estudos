// ESCOPOS - PARTE 1

// A visibilidade que um código vai ter sobre variedades e funções

// bloco 

if (true) {
    const myName = "Karleandro"; // variável de escopo de bloco
    let myAge = 21; // variável de escopo de bloco
    console.log(myName);
    console.log(myAge);
}

// recomenda a usar let e const. Var não é recomendado, pois tem escopo de função e pode causar problemas de visibilidade.

// função é a mesma coisa que bloco, mas com escopo de função

