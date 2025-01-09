let titulo = document.querySelector('h1');
titulo.textContent = 'Funções no JS';

let box = document.querySelectorAll('box'); // seleciona todos

// FUNÇÃO 

// PROCEDIMENTO -> Não tem retorno
function olaMundo() {
    document.write('Olá Mundo sem retorno! <br>');
}

// FUNÇÃO SEM PARAMETRO E COM RETORNO
function olaMundo2() {
    return 'Olá mundo com retorno! <br>'
}

// CHAMANDO A FUNÇÃO/EXECUTANDO
olaMundo();
document.write(olaMundo2()); // 

// FUNÇÕES COM PARAMETRO

// SEM RETORNO (PROCEDIMENTO)
function soma(a, b) {
    document.write((a + b) + '<br>') ;
}
soma(5,2);

// COM RETORNO 
function soma2(a, b) {
    return a + b;
}
document.write(`<p>${soma2(10, 1)}</p>`);

// FUNÇÕES ANONIMAS (FUNÇÃO QUE NÃO TEM NOME)

titulo.addEventListener('click', function() {
    alert('Clicou no titulo');
})

// ARROW FUNCTIONS -> FUNÇÃO ANONIMA
const olaMundoArrow = () => {
    document.write("Olá mundo!!!!!!!!!!");
}

const olaMundoArrow2 = () => "<p>Olá mundo com arrow function</p>";

olaMundoArrow();
document.write(olaMundoArrow2());

// document.write -> comando de saída