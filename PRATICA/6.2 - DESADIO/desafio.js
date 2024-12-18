document.write(`<h2>Informações</h2>`);

let lutador = 'Fedor Vladimirovich Emelianenko';
let nacionalidade = 'Russo';
let idade = 44;
let peso = 106;
let altura = 1.83;

document.write(`Lutador: ${lutador} <br>`);
document.write(`Nacionalidade: ${nacionalidade} <br>`);
document.write(`Idade: ${idade} anos <br>`);
document.write(`Peso: ${peso}Kg <br>`);
document.write(`Altura: ${altura}m `);
document.write(`<hr>`);

document.write(`<h2>Frase do Dia</h2>`);

const dia = 10;
const mes = 9;
const ano = 2021;
const frase = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.";
const nome = 'Aaron Swartz';

document.write(`${dia}/${mes}/${ano} <br>`);
document.write(`${frase} <br>`)
document.write(`${nome}`)
document.write(`<hr>`);

document.write(`<h2>Array de Meses do Ano</h2>`);
let meses = ['Janeiro', 'Fevereiro', 'Março'];

document.write(`${meses[0]}, ${meses[1]}, ${meses[2]} ...`)
document.write(`<hr>`);

document.write(`<h2>Objeto Jogo</h2>`);

let jogo = {
    nome : 'League Of Legends - LOL',
    desenvolvido : 'Riot Games',
    anoLancamento : 2009
}

document.write(`Jogo: ${jogo.nome} <br>`);
document.write(`Desenvolvido por: ${jogo.desenvolvido} <br>`);
document.write(`Ano de Lançamento: ${jogo.anoLancamento}`);