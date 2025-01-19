let formulario = document.querySelector('form'); // 
let cxNota1 = document.querySelector('#nota1');
let cxNota2 = document.querySelector('#nota2');

let cxMedia = document.querySelector('#resultadoMedia');
let aviso = document.querySelector('#aviso');
let aviso2 = document.querySelector('#aviso2');

let btnEnviar = document.querySelector('#btnEnviar');
let btnLimpar = document.querySelector('#btnLimpar');

btnEnviar.addEventListener('click', function (e){
    e.preventDefault();

    //pegar os valores de cada input (.value)
    let nota1 = Number(cxNota1.value);
    let nota2 = Number(cxNota2.value);

    let media = (nota1 + nota2) / 2;

    console.log(media);
    console.log(typeof media);
    cxMedia.value = media;

    let sit = situacaoMedia(media);
    aviso.textContent = sit;
})

function situacaoMedia(media) {
    let situacao = '';
    if (media >= 7) {
        situacao = 'Aprovado(a)!';
        aviso.style.backgroundColor = 'green';

    } else if (media >= 4.59 && media <= 6.99) {
        situacao = 'Recuperação!';
        aviso.style.backgroundColor = 'yellow';
    } else {
        situacao = 'Reprovado(a)!';
        aviso.style.backgroundColor = 'red';
    }
    return situacao
}

btnLimpar.addEventListener('click', function() {
    aviso.textContent = 'Situação Final';
    aviso.style.backgroundColor = '';
})

function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value

    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset(); // reseta o formulário
        aviso2.textContent = 'Digite um número entre 0.0 e 10.0';
        aviso2.classList.add('alerta')
        setTimeout(function(){ // funcao anonima que vai ser executata em segundos (definir o tempo)
            aviso2.textContent = ''
            aviso2.classList.remove('alerta')
        }, 2000); // 2000 = 2 segundos
    }
}