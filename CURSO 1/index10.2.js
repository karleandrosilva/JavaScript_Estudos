// estrtura condicional switch - parte 2

const stuff = "queijo";

switch (stuff) {
    case "pizza":
    case "hamburguesa":
    case "hot dog":
    case "pastel": {
        console.log("Comida");
        break;
    }
    case "vaca":
    case "gato":
    case "cachorro":
    case "cavalo": {
        console.log("Animal");
        break;
    }
    case "carro":
    case "moto":
    case "bicicleta":
    case "avião": {
        console.log("Transporte");
        break;
    }

    // default é o caso que será executado se nenhum dos outros casos for verdadeiro
    default: { 
        console.log("Outro");
        break;
    }
}

// ou seja, pode ter vários casos que executam o mesmo bloco de código