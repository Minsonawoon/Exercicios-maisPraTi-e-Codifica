const prompt = require('prompt-sync')();

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let numero = parseInt(prompt('Digite um número: '))

for (let i = 1; i <= 10; i++) {
    console.log(numero);
}