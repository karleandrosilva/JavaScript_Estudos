function carregou() { 
    console.log('Página carregada com sucesso!');
}

function rolouPagina() {
    alert('Página rolando!');
}

function focou() {
    console.log('Foco no titulo');
}

function focoNoCampo() {
    console.log('Foco no campo de texto');
}

function semfocoNoCampo() {
    console.log('Saiu o foco do campo de texto!');
}

let letras = document.querySelector('input[type=text]');
function avisarQueTeclou() {
    let numLetras = 1;
    console.log('Está teclando ' + (letras.value.length + numLetras)) // conta quantas vezes teclou uma tecla
}

let botao1 = document.querySelector('#btn1');
let botao2 = document.querySelector('#btn2');
let botaoEnviar = document.querySelector('#btn3');

// foco no botão 1
botao1.addEventListener('mouseover', function () {
    console.log('Foco no botão 1');
})

botao2.addEventListener('blur', function () {
    console.log('Foco no botão 2');
})

botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault(); // não faz o compotrtamento padrão de enviar
    console.log('Clicou no botão enviar');
})