const prompt = require('prompt-sync')();

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

let multiplicacao = Number(prompt('Informe o número que você quer saber a tabuada: '))

for(let i = 0; i <= 10; i++){
    console.log(`${multiplicacao} * ${i} =`, multiplicacao * i)
}