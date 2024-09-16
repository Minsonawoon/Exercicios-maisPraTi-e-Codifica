// 12. Atualizando um Array de Objetos
// Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    {produto: "Massa de pão", quantidade: 50, minimo: 20},
    {produto: "Chantilly", quantidade: 20, minimo: 5},
    {produto: "Açúcar", quantidade: 15, minimo: 30},
    {produto: "Sal", quantidade: 10, minimo: 40}
]

estoque.forEach(item => {
    if(item.quantidade < item.minimo){
        item.quantidade *= 2
    }
})

console.log(estoque)