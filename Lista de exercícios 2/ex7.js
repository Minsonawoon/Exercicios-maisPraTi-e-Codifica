// 7. Modificando Objetos em um Array
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
    {nome: "Molho de Tomate", preco: 3, desconto: 0},
    {nome: "Requeijão", preco: 5, desconto: 0},
    {nome: "Bolacha", preco: 2, desconto: 0},
    {nome: "Molho de Tomate", preco: 3, desconto: 0},
]

produtos.forEach(produto =>{
    produto.desconto = produto.preco * 0.10
    let precoNovo = produto.preco - produto.desconto
    console.log(`Nome do produto: ${produto.nome}. Valor atual: ${precoNovo.toFixed(2)}`)
})