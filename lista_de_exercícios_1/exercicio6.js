const prompt = require('prompt-sync')();

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

let lado1 = parseFloat(prompt('Digite o valor do primeiro lado: '))
let lado2 = parseFloat(prompt('Digite o valor do primeiro lado: '))
let lado3 = parseFloat(prompt('Digite o valor do primeiro lado: '))

if ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado3 + lado2 > lado1)) {
    if (lado1 === lado2 && lado2 === lado3){
        console.log("Este é um triângulo equilátero.")
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        console.log('Esté é um triângulo isósceles.')
    } else {
        console.log('Este é um triângulo escaleno.')
    }
} else{
    console.log('Os lados não formam um triângulo.')
}