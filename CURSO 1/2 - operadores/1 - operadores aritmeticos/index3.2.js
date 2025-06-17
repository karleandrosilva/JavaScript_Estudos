const price = 340;
const porcentage = 25;

const discount = (price * porcentage) / 100;
const finalPrice = price - discount;

console.log("Preço do produto: ", price);
console.log("Valor do desconto: ", discount);
console.log("Preço final: ", finalPrice);