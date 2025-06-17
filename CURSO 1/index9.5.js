const performace = "";
const baseSalary = 50000;
let bonus = 0;

if (performace === "otimo") {
    bonus = baseSalary * 0.2; // 20% de bonus
} else if (performace === "muito bom") {
    bonus = baseSalary * 0.15; // 15% de bonus
} else if (performace === "bom") {
    bonus = baseSalary * 0.10; // 10% de bonus
} else if (performace === "regular") {
    bonus = baseSalary * 0.05; // 5% de bonus
} else {
    console.log("Desempenho não reconhecido, sem bônus.");
}

console.log(`Bônus: R$ $${bonus.toFixed(2)}`); // Exibe o bônus formatado com duas casas decimais