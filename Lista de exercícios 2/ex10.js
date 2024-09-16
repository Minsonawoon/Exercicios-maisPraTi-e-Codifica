// 10. Criando Relatórios com Objetos e Arrays
// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
    {produto: "Tablet", quantidade: 15, valor: 890.00},
    {produto: "Notebook", quantidade: 10, valor: 2500.00},
    {produto: "Celular", quantidade: 35, valor: 1200.00},
    {produto: "Computador desktop", quantidade: 11, valor: 3900.00},
    {produto: "Smartwatch", quantidade: 23, valor: 320.00},
]

let somaProdutos = 0

vendas.forEach(venda => {
    somaProdutos += venda.quantidade * venda.valor
})

console.log(somaProdutos)