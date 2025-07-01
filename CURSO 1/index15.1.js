// objetos = pode definir propriedades e métodos

const player = {
    nickname: "Karleandro",
    heals: 20,
    isDead: false,

    // metodos de objetos
    // nomeDoMetodo () {
    //     // código do método}

    present() {
        console.log("Meu nick é: " + this.nickname); // this se refere ao objeto atual
    }
}

console.log(player.nickname); 

player.name = "Karleandro Silva";

console.log(player); 

player.present(); // chama o método present do objeto player

for (const prop in player) {
    console.log(prop); // exibe as propriedades do objeto player
}