// OBJETOS - PARTE 3

const rl = require("node:readline");
const { promiseHooks } = require("node:v8");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
}) // utiliza o método do objero rl,


// prompt.question()
// prompt.close();


// PARTE 4


const player = {

    inventory: { // objeto
        items : [ // arrays de objeto
            {
                name: "sword",
                durability: 100,
                enchantment: [ // arrays de objetos
                    {name: "fire", level: 2},
                    {name: "lightning", level: 1}
                ]
            },
            {
                name: "shield",
                durability: 150,
            }
        ],

        potions: [ // arrays de objeto
            {type: "regeneration", duration: 30},
            {type: "strength", duration: 60}
        ]
    }

}

console.log(player.inventory.potions[0].type); // Acessa o tipo da primeira poção