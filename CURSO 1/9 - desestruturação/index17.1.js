// desestruturação

function main() {

    const person = {
        name: "Karleandro",
        lastName: "Silva",
        age: 21,
        isProgrammer: true,
    }

    const name = person.name; // normalmente pode fazer isso, mas com a desestruturação pode fazer de forma mais simples

    const {age} = person; // assim, pode extrair diretamente a variável age do objeto person

    // e faz com que age seja uma variável que recebe o valor de person.age
    console.log(age);

    // também pode extrair várias variáveis de uma vez só:
    const {lastName, isProgrammer} = person; // assim, pode extrair várias variáveis de uma vez só

    console.log(lastName, isProgrammer)
}

main();