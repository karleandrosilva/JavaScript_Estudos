let pessoa = {
    nome : 'Karle',
    idade : 20,
    peso : 60.0,
    altura : 1.78,
    doador : true
};

let produtos = {
    descricao : [], // arrays
    preco : [] // arrays
};

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010]
};

// para acessar alguma propriedade no console
pessoa.nome;  
pessoa['nome']

// operação imc

let imc = pessoa.peso / (pessoa.altura * pessoa.altura);
imc = imc.toFixed(2); // limits o numero de casas decimais

console.log("O IMC É:", imc)

//Alterar/Atualizar valor
pessoa.nome = "Karleandro";

produtos.descricao = ['Arroz'];
produtos.preco = [4.99];
console.log(produtos);

// Usando SPREED OPERATOR
produtos.descricao = [...produtos.descricao, 'Feijão', 'Macarrão'];
produtos.preco = [...produtos.preco, 9.99, 1.89];
console.log(produtos);

// Usando SPREED OPERATOR com obj const
carros.marca = [...carros.marca, 'WV'];
carros.modelo = [...carros.modelo, 'Fusca'];
carros.ano = [...carros.ano, '1979'];

console.log(carros)