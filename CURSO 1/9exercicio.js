/*🧠 Exercício: Verificador de Nota
Crie um programa que:
- Peça ao usuário uma nota de 0 a 10 (simule com uma variável).
-Use if, else if e else para exibir:
    Se a nota for maior ou igual a 9, mostrar: "Excelente!"
    Se a nota for entre 7 e 8.9, mostrar: "Bom!"
    Se a nota for entre 5 e 6.9, mostrar: "Regular!"
    Se a nota for abaixo de 5, mostrar: "Reprovado!"
    Se a nota estiver fora do intervalo de 0 a 10, exiba: "Nota inválida!"
*/

const nota = 7.85;

if (nota >= 9){
    console.log("Excelente!");
} else if (nota >= 7 && nota <= 8.9) {
    console.log("Bom!");
} else if(nota >= 5 && nota <= 6.9) {
    console.log("Regular!");
} else if(nota < 5) {
    console.log("Reprovado!");
} else if (nota < 0 || nota > 10) {
    console.log("Nota inválida!");
}