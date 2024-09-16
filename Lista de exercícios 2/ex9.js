// 9. Contabilizando Elementos com uma Condição
// Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
    {nome: "Márcia", idade: 15, cidade: "Ribeirão Pires"},
    {nome: "Joaquim", idade: 32, cidade: "São Caetano do Sul"},
    {nome: "Jack", idade: 57, cidade: "Santo Amaro"},
    {nome: "Jaqueline", idade: 21, cidade: "São Mateus"},
    {nome: "Elene", idade: 44, cidade: "Ribeirão Pires"},
]

let contador = 0

clientes.forEach(cliente => {
    if(cliente.idade > 30){
        contador++
    }
})

console.log(contador)