let formulario = document.querySelector('form'); // 
let cxNota1 = document.querySelector('#nota1');
let cxNota2 = document.querySelector('#nota2');

let cxMedia = document.querySelector('#resultadoMedia');
let aviso = document.querySelector('#aviso');

let btnEnviar = document.querySelector('#btnEnviar');
let btnLimpar = document.querySelector('#btnLImpar');

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