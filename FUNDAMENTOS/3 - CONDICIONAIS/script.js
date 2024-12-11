// OPERADORES LÓGICOS -> (and = &&) ,( or = ||) ,  (not !)

const hora = 19;

if (hora <= 11) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

const temperatura = 16;

if (temperatura <= 18) {
    console.log("Está frio!");
} else {
    console.log("Está calor!");
}

const velocidade = 100;

if (velocidade < 20) {
    console.log("Está muito abaixo da velocidade");
} else if (velocidade > 80) {
    console.log("Velocidade ideal");
} else {
    console.log("Excesso de velocidade!");
}

// SWITCH CASE

let diaDaSemana = 12;

switch (diaDaSemana) { // bom para avaliar casos com valores especificos
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia da semana inválido!");
}

let idade = 10;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir!");
} else if (idade >= 18 && !temCarteira){
    console.log("Você tem a idade, mas não tem a carteira!");
} else if (idade < 17 && temCarteira) {
    console.log("Você tem a carteira, mas não tem a idade minima!");
} else {
    console.log("Não pode dirigir!");
}

const temRG = false;
const temPassaporte = false;

if (temRG || temPassaporte) {
    console.log("Pode fazer o cadastro!");
} else {
    console.log("Não pode fazer o cadastro!");
}

const estaChovendo = false;
if (!estaChovendo) { // negando
    console.log("Está chovendo");
}