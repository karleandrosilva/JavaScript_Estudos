// parte 4

function main() {

    const nickname = "Karle";

    const player = {
        nickname: "Karleandro",
        health: 100,
        inventory : {
            items: ["sword", "shield", "potion"],
            potions: [
                { type: "regenaration", duration: 8 },
                { type: "defense", duration: 8 }
            ]
        },
    }

    const { inventory: { potions } } = player; // a extração final será somente de potions

    const [{ type, duration }, { duration: secondDuration, type: secondType }] = potions; // extrai os dois objetos do array potions

    console.log(type, duration); // type e duration do primeiro objeto 
    console.log(secondType, secondDuration); // type e duration do segundo objeto

}

main();