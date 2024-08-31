const prompt = require('prompt-sync')();

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let num1 = Number(prompt('Insira o primeiro número: '))
let counter = 0
let sum = 0

while(num1 !== 0){
    sum += num1
    counter++
    num1 = Number(prompt("Digite outro número: "))
}

console.log('A média aritmética é: ', sum/counter)