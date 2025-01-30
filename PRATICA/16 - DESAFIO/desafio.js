// SELECIONAR ELEMENTOS QUE VÃO SER USADOS

let sorteado = document.querySelector('#sorteado');
let numeroSorteado = document.querySelector('#dado');
let imgDado = document.querySelector('#imgDado');
let btnSortear = document.querySelector('#btnSortear');
let audioDadoRolando = document.querySelector('#dadoRolando');

btnSortear.addEventListener('click', function() {

    // adicionar a animacao
    imgDado.classList.add('animar'); // .classList.add() -> metodo para adicionar classes css a elementos html
    sorteado.classList.add('aparecer'); 

    // tocar o efeito sonoro
    audioDadoRolando.play();

    // ocultar o botão sortear (para que não aparece enquanto o sorteio ocorre)
    btnSortear.style.display= 'none';

    // funcao setTimeout = executa uma função após um determinado tempo 
    setTimeout(function() { // para executar as acoes apos 1.75 segundos 

        // armazena numero sorteadi na variavel
        numeroSorteado = getRandomInt(1,6);

        // escreve o numero sorteado no console para saber
        console.log(numeroSorteado);

        // exibe o numero sorteado no paragrafo
        sorteado.textContent = numeroSorteado

        // define o atributo src com base no numero
        imgDado.setAttribute('src', 'img/dados/'+numeroSorteado+'.png'); // se sair o numero 2, vai aparecer a foto do dado 2

        // define o atributo alt com base no numero
        imgDado.setAttribute('alt', 'imagem dado número: ' + numeroSorteado); // mostra a informação alt para ter acessibilidade

        // exibe o botao sortear
        btnSortear.style.display= 'inline-block';

        // retira a animação
        imgDado.classList.remove('animar'); // .classList.remove() -> metodo para remover classes css a elementos html
        sorteado.classList.remove('aparecer'); 

    }, 1600) // segundos
})

function getRandomInt(min, max) { // funcao que gera numero randomico inteiro incluindo o minimo e o maximo
    min = Math.ceil(min); // ceil (teto) = arredonda para cima 
    max = Math.floor(max); // floor (piso) = arredonda para baixo 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 