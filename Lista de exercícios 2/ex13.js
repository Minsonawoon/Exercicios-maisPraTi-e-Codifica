// 13. Implementando um Carrinho de Compras
// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

const carrinho = {
    itens: [
        {nome: "calça", quantidade: 3, precoUnitario: 30.00},
        {nome: "blusa", quantidade: 2, precoUnitario: 45.90},
        {nome: "camiseta", quantidade: 1, precoUnitario: 20.00},
        {nome: "jaqueta", quantidade: 1, precoUnitario: 55.90},
    ]
}

let valorTotal = 0

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario
})

console.log(`O valor total do carrinho é de ${valorTotal}.`)