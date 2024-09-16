// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

const pessoas = [
    {nome: "Marcela", idade: 29, cidade: "Mauá"},
    {nome: "Nicolas", idade: 19, cidade: "Santo André"},
    {nome: "José", idade: 5, cidade: "Mauá"},
    {nome: "Antonieta", idade: 45, cidade: "São Paulo"},
    {nome: "Roberta", idade: 31, cidade: "Recife"},
]

for(let pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}