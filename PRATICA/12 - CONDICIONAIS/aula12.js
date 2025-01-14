let sit1 = document.querySelector('#sit1');
let sit2 = document.querySelector('#sit2');
let sit3 = document.querySelector('#sit3');
let escolha = document.querySelector('#escolha');

let notafinal1 = 3;
let notafinal2 = 8;
let notafinal3 = 5;

// IF (SIMPLES)
if (notafinal1 >= 7){ // se
    sit1.textContent = 'Aprovado(a)!'; // se for verdadeiro executa esta parte
}

// IF ELSE
if (notafinal1 >= 7) {
    sit1.textContent = 'Aprovado(a)!';
} else { // se não
    sit1.textContent = 'Reprovado(a)!';
}

// IF TERNARIO = condicao ? verdadeiro : falso
notafinal2 >= 7 ? sit2.textContent = 'Passou!' : sit2.textContent = 'Ficou!';

// IF ENCADEADO/ANINHADO
if (notafinal3 >= 7) {
    sit3.textContent = 'Aprovado(a)!';
} else if (notafinal3 <= 3) { // se não se
    sit3.textContent = 'Reprovado(a)!';
} else {
    sit3.textContent = 'Recuperação!';
}

// ESCOLHA (DECISÃO)
//let situacao = '';
//let situacao = 'Aprovado';
//let situacao = 'Reprovado';
//let situacao = 'Recuperação';

switch(situacao) {

    case 'Aprovado':
        escolha.textContent = 'Passou de ano!';
        break;
    case 'Reprovado':
        escolha.textContent = 'Não passou de ano!';
        break;
    case 'Recuperação':
        escolha.textContent = 'Ainda tem uma chance!';
        break;

    default:
        escolha.textContent = 'Estude!';
}

