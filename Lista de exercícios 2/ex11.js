// 11. Agrupando Elementos com forEach
// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
    {cliente: "Monalisa", produto: "Notebook", quantidade: 2},
    {cliente: "Mirian", produto: "celular", quantidade: 1},
    {cliente: "Jonas", produto: "tablet", quantidade: 1},
    {cliente: "Mateus", produto: "Notebook", quantidade: 1},
    {cliente: "Rian", produto: "celular", quantidade: 4},
]

let quantidadeProdutos = {}

pedidos.forEach(pedido => {
    if (quantidadeProdutos[pedido.cliente]) {
        quantidadeProdutos[pedido.cliente] += pedido.quantidade;
    } else {
        quantidadeProdutos[pedido.cliente] = pedido.quantidade;
    }
})

console.log(quantidadeProdutos);