const prompt = require('prompt-sync')();

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const numero = parseInt(prompt("Digite um número: "));

let fatorial = 1;  

if (numero < 0) {
    console.log("O fatorial não é definido para números negativos.");
} else {
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;  
    }
    
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
