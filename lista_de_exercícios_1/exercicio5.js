const prompt = require('prompt-sync')();

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let peso = parseFloat(prompt('Digite o seu peso: '))
let altura = parseFloat(prompt('Digite a sua altura: '))

let IMC = peso / (altura * altura)

if(IMC < 18.5) {
    console.log("Baixo peso")
} else if (IMC >= 18.5 && IMC <= 24.99) {
    console.log("Peso adequado")
} else if (IMC >= 25 && IMC <= 29.9){
    console.log("Sobrepeso")
} else if (IMC >= 30 && IMC <= 34.9){
    console.log("Obesidade grau 1")
} else if (IMC >= 35 && IMC <= 39.9){
    console.log("Obesidade grau 2")
} else {
    console.log("Obesidade extrema")
}