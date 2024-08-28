const prompt = require('prompt-sync')();

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

let idade = Number(prompt('Digite a sua idade: '))

if(idade >= 0 && idade <= 12) {
    categoria_idade = 'Criança'
} else if (idade >= 13 && idade <= 17) {
    categoria_idade = 'Adolescente'
} else if (idade >= 18 && idade <= 64) {
    categoria_idade = 'Adulto'
} else {
    categoria_idade = 'Idoso'
}

console.log(categoria_idade)