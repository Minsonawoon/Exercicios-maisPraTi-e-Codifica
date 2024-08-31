const prompt = require('prompt-sync')();

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let quantidadeMacas = Number(prompt('Digite o valor de maçãs compradas: '))

let precoUnidade

if (quantidadeMacas < 12){
    precoUnidade = 0.30
} else {
    precoUnidade = 0.25
}

valorTotal = quantidadeMacas * precoUnidade

console.log(`O total da compra foi de ${valorTotal.toFixed(2)}`)
