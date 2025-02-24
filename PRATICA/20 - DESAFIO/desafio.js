// seleciona os elementos

let titulo = document.querySelector('h1');
let instrucoes = document.querySelector('#instrucoes');
let aviso = document.querySelector('#aviso');
// let respostaCerta = document.querySelector('#respostaEsta');
let pontos = 0; // pontos para o placar
let placar = 0; // placar

// seleção das perguntas
let numQuestao = document.querySelector('#numQuestao');
let pergunta = document.querySelector('#pergunta');

// seleção das alternativas
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');

// selecao dos articles com a classe questao
let articleQuestoes = document.querySelector('.questoes');
let alternativas = document.querySelector('#alternativas');

// objetos literais
const q0 = {
    numQuestao : 0,
    pergunta : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta : "0",
}

const q1 = {
    numQuestao : 1,
    pergunta : "JavaScript é uma?",
    alternativaA : "Linguagem de Programação",
    alternativaB : "Linguagem de Marcação",
    alternativaC : "Linguagem de estilização",
    correta : "Linguagem de Programação",
}

const q2 = {
    numQuestao : 2,
    pergunta : "Qual é uma das formas para se declarar uma variável?",
    alternativaA : "h1",
    alternativaB : "p",
    alternativaC : "let",
    correta : "let",
}

const q3 = {
    numQuestao : 3,
    pergunta : "HTML e CSS são?",
    alternativaA : "Linguagem de Marcação e Estilização",
    alternativaB : "Linguagem de Programação e Marcação",
    alternativaC : "Linguagem de Programação e Estilização",
    correta : "Linguagem de Marcação e Estilização",
}

const q4 = {
    numQuestao : 4,
    pergunta : "Qual palavra reservada cria uma função?",
    alternativaA : "funcao()",
    alternativaB : "function()",
    alternativaC : "funcion()",
    correta : "function()",
}

const q5 = {
    numQuestao : 5,
    pergunta : "Qual desses nomes são linguagem de Programação?",
    alternativaA : "JavaScript, Python, Docker, Java e C++",
    alternativaB : "JavaScript, Python, Java, C++ e Eclipse",
    alternativaC : "JavaScript, Python, Java, C++ e Portugol",
    correta : "JavaScript, Python, Java, C++ e Portugol",
}

// constante com um array de objetos com todas as questoes
const questoes = [q0, q1, q2, q3, q4, q5];

// seleciona os elementos para dizer o numero da questao e o total
let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')


numero.textContent = q1.numQuestao
let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// montar a primeira questao completa, para iniciar o quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')