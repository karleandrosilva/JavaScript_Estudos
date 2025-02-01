// para o sorteio do numero secreto

let numeroSecreto = 0;
let contador = 1; // contador comeca em 1
let min = 1;
let max = 10;
let situacao = ''; // variavel para mostrar se foi maior ou menor o chute

// selecionar os elementos HTML

let inputNumero = document.querySelector('#inputNumero');
let btnChutar = document.querySelector('#btnChutar');
let aviso = document.querySelector('#aviso');
let musica = document.querySelector('#musicaDeAviso');

// funçoes/metodos para controlar o jogo
function gerarNumeroSecreto(){
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numeroSecreto);
}

function bloquearBtnChutar() {
    btnChutar.setAttribute('disabled', 'disabled'); // não pode mais ser usado até que o atributo seja removido.
    btnChutar.style.background = '#ccc';
    btnChutar.style.cursor = 'not-allowed';
}

function ativarBtnChutar() {
    btnChutar.removeAttribute('disabled'); // removeu e a agora pode ser usado
    btnChutar.style.background = '#222';
    btnChutar.style.cursor = 'pointer';
}

function validarNumeroDigitado(numero) {
    if (numero <= 0 || numero > 10) {
        console.log('Tentativa inválida!');
        aviso.classList.add('errou'); // aparece na cor vermelha
        mensagemRapida('Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.');
        bloquearBtnChutar(); // chamando a função para bloquear o botao
        inputNumero.value = '' // apaga o número errado do input
    } else {
        console.log('Número válido!');
    }
}

function mensagemRapida(mensagem) {
    aviso.textContent = mensagem;
    setTimeout(function() { // depois de 3 segundos executa
        aviso.textContent = "";
        aviso.classList.remove('acertou');
        aviso.classList.remove('errou');
        inputNumero.value = ''
    }, 5000)  
}

function jogar(){
    console.log('Jogando!');
    verificarSeAcertou();
}

function gamerOver(situacao) {
    switch (situacao) {
        case 'Acertou':
            aviso.classList.add('acertou');
            mensagemRapida('Acertou, o número secreto era ' + numeroSecreto);
        break

        case 'Chute Maior':
            mensagemRapida('Chute maior que o número secreto!');
            aviso.classList.add('errou');
        break

        case 'Chute Menor':
            mensagemRapida('Chute menor que o número secreto!');
            aviso.classList.add('errou');
        break

        default:
            console.log('Informe a situaçaõ');
    }
}

function verificarSeAcertou() {

    chute = parseInt(document.querySelector('#inputNumero').value); // pega o valor do input e econverte para inteiro

    console.log('Nº de chute ' + contador);
    console.log('Chute ' + chute);

    if (numeroSecreto === chute) {
        console.log('Acertou!');
        situacao = 'Acertou'
        gamerOver(situacao)
        contador = 1;
        gerarNumeroSecreto() // gera um novo número secreto
    } else if (chute > numeroSecreto) {
        contador++;
        console.log('Chute maior!');
        gamerOver('Chute Maior')
    } else if (chute < numeroSecreto) {
        contador++;
        console.log('Chute menor!');
        situacao = 'Chute Menor'
        gamerOver(situacao)
    } else {
        console.log('Impossivel verificar se acretou!');
    }
}

// métodos para manipular as músicas

function tocarMusicaDeFundo(){
    musica.play();
}

function ativarDesativarMusica() {
    if (musica.muted) {
        musica.muted = false;
    } else {
        musica.muted = true;
    }
}

function pausarMusicaDeFundo() {
    musica.pause();
    musica.carrentTime = 0; // comeca do inicio
}
