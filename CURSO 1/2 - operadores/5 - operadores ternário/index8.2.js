const bank = 300;
const transferValue = 450;

console.log(transferValue < bank ? "Tranferência pode ser feita" : "Saldo insuficiente para transferência");

const nome = "Karleandro";

// para saber se é criança
const isAdult = true;
console.log(nome + `${isAdult ? "não ": ""}é criança`);


// Para saber se é de dia, tarde, noite ou madrugada
const hours = 6;
console.log(
    nome + ",",
    hours >= 6 && hours < 12 ? "Bom dia!" :
    hours >= 12 && hours < 18 ? "Boa tarde!" :
    hours >= 18 && hours < 23 ? "Boa Noite!" :
    "Boa Madrugada!"
);
