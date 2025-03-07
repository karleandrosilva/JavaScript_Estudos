// Atribuição: 
//  Simples: 
// Exemplo:

var a = 5 + 3
var b = a % 5 
var c = 5 * b ** 2 
var d = 10 - a / 2 
var e = 6 * 2 / d 
var f = b % e + 4 / e 

console.log(f)

// Auto atribuição:

var n = 3
n = n + 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5
console.log(n)

// Simplificando:
n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5

// Incremento:
var x = 5
x = x+1           // x++(simplificado)
x = x-1          // x--  (simplificado)