// SELECIONA OS ELEMENTOS
let valorDigitado = document.querySelector('#valorEmReal'); // seleciona o input com o numero digitado

let moedaSelecionada = document.querySelector('moedaEstrangeira'); // seleciona todos os elementos radios (para criar um array deles)

let aviso = document.querySelector('#aviso');

// SELECIONA OS BOTÕES
let btnConverter = document.querySelector('#btnConverter');
let btnLimpar = document.querySelector('#btnLimpar');

// VÁRIAVEIS DAS COTAÇÕES DE CADA MOEDA
let valorEmReal = 0;

let valorDoDolar = 5.77;
let valorDoEuro = 6.04;
let valorDaLibra = 7.23;
let valorDoBitcoin = 565.459;

let moedaEstrangeira = '';
let moedaConvertida = '';

// MENSAGEM FORMATADA PARA MOSTRAR VALORES MONETARIOS
function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0: ''; // se valorEmReal não é um número, então valorEmReal é definido como 0. Caso contrário, não faz nada.
    console.log("Moeda COnvertida " + moedaConvertida);
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
}

// VERIFICA SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER
function bloquearBotao() {
    if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled');
        btnConverter.style.background = '#ccc';
        btnConverter.style.cursor = 'not-allowed';
    }
}

// REATIVAR BOTÃO
function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled');
        btnConverter.style.background = '#ffc107';
        btnConverter.style.cursor = 'pointer';
    } else {
        console.log('Não ativou!');
    }
}