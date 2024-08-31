const prompt = require('prompt-sync')();

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let valor1 = Number(prompt('Informe o primeiro valor: '))
let valor2 = Number(prompt('Informe o segundo valor: '))

while (valor1 === valor2) {
    console.log('Os valores são iguais, digite valores diferentes.')
}

if(valor1 < valor2){
    console.log(`Os valores em ordem crescente são: ${valor1}, ${valor2}`)
} else {
    console.log(`Os valores em ordem crescente são: ${valor2}, ${valor1}`)
}
