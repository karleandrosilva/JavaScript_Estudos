// SELECIONA TODOS OS ELEMENTOS QUE DESEJA MANIPULAR

let formulario = document.querySelector('form'); // pegando o id deles
let cxNome = document.querySelector('#nome');
let cxIdade = document.querySelector('#idade');
let cxPeso = document.querySelector('#peso');
let cxAltura = document.querySelector('#altura');
let cxImc = document.querySelector('#resultadoImc');

let aviso = document.querySelector('#aviso');
let dados = document.querySelector('.pessoa');

let btnEnviar = document.querySelector('#btnEnviar');
let btnLimpar = document.querySelector('#btnLimpar');

// PARA PEGAR DADOS QUE ESTÃO DENTRO DAS CAIXAS USE A PROPRIEDADE -> .value

// adiciona um escutador de eventos no botao enviar para criar uma funcao anonima que pega os valores de cada input
btnEnviar.addEventListener ('click', function (e) { // PARAMETRO -> (e)

    //pegar os valores de cada input (.value)
    let nome = cxNome.value;
    let idade = cxIdade.value;
    let peso = cxPeso.value;
    let altura = cxAltura.value;

    let imc = (peso / (altura * altura)).toFixed(1); // .toFixed(1) = casa decimal | somente uma

    console.log(nome);
    console.log(idade);
    console.log(peso);
    console.log(idade);
    console.log(altura);
    console.log(imc);

    cxImc.value = imc; // recebe o valor do imc e coloca na caixa do html
    let situacao = situacaoDoPeso(imc);
    aviso.textContent = situacao;

    // objeto pessoa 
    let pessoa = {
        // propriedade : variavel
        nome : nome,
        idade : idade,
        peso : peso, 
        altura : altura,
        imc : imc,
        sit : sit,
    }

    console.log(pessoa);
    dados[1].textContent = pessoa.nome;
    dados[2].textContent = pessoa.idade + " anos"
    dados[3].textContent = pessoa.peso + "Kg"
    dados[4].textContent = pessoa.altura + "m"
    dados[5].textContent = pessoa.imc + " " + pessoa.sit

    // previni o evento padrão (que da um refresh/carrega na pagina)
    e.preventDefault() 
}) 