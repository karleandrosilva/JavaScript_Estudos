// parte 5

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

    const { inventory: { potions: [{ type, duration }]} } = player; // a extração final será somente do primeiro objeto do array potions

    console.log(type, duration); // type e duration do primeiro objeto
}

main();