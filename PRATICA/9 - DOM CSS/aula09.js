let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 - Manipular CSS'

//  Alteração e mundança de propriedade com CSS
let image = document.querySelector('#foto');
image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png') // 
image.setAttribute('width', '150px');

// Manipular CSS
titulo.style.color = '#F0DB4F';
titulo.style.backgroundColor = 'black';
titulo.style.width = '300px';


let tela = document.querySelector('main');

// seleciona os elementos que tem os botoes
let botaoDark = document.querySelector('#btdark');
let botaoLight = document.querySelector('#btlight');

// Quando tiver um evento de click nos botoes ele chama a funcao e executa
botaoDark.addEventListener('click', modoDark); // addEventListener -> escutador de eventos
botaoLight.addEventListener('click', modoLight);

function modoDark() {
    console.log("Modo Dark ativado");
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function modoLight() {
    console.log("Modo Light ativado");
    tela.classList.add("light");
    tela.classList.remove("dark");
}