// parte 2

function main() {

    const colors = ["red", "green", "blue", "yellow"];

    const [ firstColor, secondColor ] = colors; // assim, pode extrair diretamente o array colors

    console.log(firstColor + ", " + secondColor); // pega na ordem que estão no array
}

main();

// parte 3

function main2() {

    const nickname = "Karle";

    const player = {
        nickname: "Karleandro",
        health: 100,
        inventory : {
            items: ["sword", "shield", "potion"],
            potions: [
                { type: "health", amount: 50 },
                { type: "mana", amount: 30 }
            ]
        },
    }

    const { nickname: nick, health } = player; // renomear a variável nickname para nick atraves da desestruturação = var : novoNome

    console.log(nickname, nick); // nickname é a variável original, nick é a variável renomeada

    const { inventory: { items, potions } } = player; // a extração final será somente de items e potions, que são arrays dentro do objeto inventory
    
    console.log(items); 
    console.log(potions); 

    // se quisesse manter o objeto

    const { inventory } = player; 
    const { items2, potions2 } = inventory;

    console.log(inventory);
}

main2();