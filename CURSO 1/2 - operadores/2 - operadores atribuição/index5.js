// ãtribuição

// atribuição simples: =
// adição combinada: +=
// subtração combinada: -=
// multiplicação combinada: *=
// divisão combinada: /=

// simples
// usar valores let
let price = 300;
console.log(price); // imprime 300

price += 50; //  é a mesma coisa que: price = price + 50;
console.log(price); // imprime 350

// para decrementar
price -= 100; //  é a mesma coisa que: price = price - 100;
console.log(price); // imprime 250

price *= 2; //  é a mesma coisa que: price = price * 2;
console.log(price); // imprime 500

price /= 5; //  é a mesma coisa que: price = price / 5;
console.log(price); // imprime 100

price += price + 30; //  é a mesma coisa que: price = price + 30;
console.log(price); // imprime 230, pois tinha 100 e somou 100 + 30