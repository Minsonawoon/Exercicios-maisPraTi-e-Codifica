const prompt = require('prompt-sync')();

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = Number(prompt('Informe a nota: '))

if(nota >= 0 && nota <= 4) {
    classificacao = 'reprovado'
} else if (nota >= 5 && nota <= 7){
    classificacao = 'recuperação'
} else if (nota >= 8 && nota <= 10) {
    classificacao = 'aprovado'
} else {
    console.log("Nota inválida. Digite uma nota de 0 a 10")
}

console.log(`De acordo com o valor ${nota}, sua classificação é ${classificacao}.`)
