let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 - Manipular CSS'

//  Alteração e mundança de propriedade com CSS
let image = document.querySelector('#foto');
image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png') // imagem
image.setAttribute('width', '150px'); // largura


// Manipular CSS
titulo.style.color = '#F0DB4F';
titulo.style.fontSize = '30px';
titulo.style.backgroundColor = 'black'; //cameCase
titulo.style.width = '350px';


let tela = document.querySelector('main');

// seleciona os elementos que tem os botoes
let botaoDark = document.querySelector('#btdark');
let botaoLight = document.querySelector('#btlight');

// Quando tiver um evento de click nos botoes ele chama a funcao e executa
botaoDark.addEventListener('click', modoDark); // addEventListener -> escutador de eventos
botaoLight.addEventListener('click', modoLight);

// funcao 
function modoDark() {
    console.log("Modo Dark ativado");
    tela.classList.add("dark"); // adiciona a formatação
    tela.classList.remove("light"); // retira a formatação
}

function modoLight() {
    console.log("Modo Light ativado");
    tela.classList.add("light");
    tela.classList.remove("dark");
}