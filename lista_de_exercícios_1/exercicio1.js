const prompt = require('prompt-sync')();

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let num1 = parseInt(prompt('Digite um número: '))

if(num1 % 2 === 0){
    console.log(`O número ${num1} é Par.`)
} else {
    console.log(`O número ${num1} é Ímpar.`)
}




