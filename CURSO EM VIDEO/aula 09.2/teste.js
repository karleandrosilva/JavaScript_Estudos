// adicionar no proprio html:
//document.write('Olá, mundo!'); // não recomendado

// selecionar elementos para poder navegar

// var corpo = document.body
// corpo.style.background = 'black';


// selecionando por marca (tagName) da pra selecionar mais de um objeto
var p1 = document.getElementsByTagName('p')[0]
p1.style.backgroundColor = 'green';

// selecionando por id 
var msg = document.getElementById('msg')
msg.style.backgroundColor = 'red';


// selecionando por seletor (RECOMENDÁVEL)
var p = document.querySelector('.paragrafo');
p.style.backgroundColor = 'purple';
