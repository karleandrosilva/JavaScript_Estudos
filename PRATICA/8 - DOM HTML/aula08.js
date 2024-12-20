// O DOM (Document Object Model) é uma interface que representa como os documentos HTML e XML são lidos pelo seu browser. Após o browser ler seu documento HTML, ele cria um objeto que faz uma representação estruturada do seu documento e define meios de como essa estrutura pode ser acessada.

// querySelector -> SOMENTE O PRIMEIRO ELEMENTO

let teste1 = document.querySelector('h1') // selecionar a tag h1 -> AULA 07

let teste2 = document.querySelector('#titulo') // selecionar o id -> #titulo

let teste3 = document.querySelector('.box') // selecionar a classe -> box

// PEGAR e ALTERAR

let titulo = document.querySelector('h1') // PEGAR
titulo.textContent = 'TITULO' // Acessar e/ou alterar


// querySelectorAll -> TODOS OS ELEMENTOS

let teste4 = document.querySelectorAll('h2') // todos os elementos h2

// PEGAR e ALTERAR  TODOS

teste4[0].textContent = 'subtitulo 1'
teste4[1].textContent = 'subtitulo 2'
teste4[2].textContent = 'subtitulo 3'

