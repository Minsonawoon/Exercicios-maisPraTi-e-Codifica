// 8. Criando Novos Arrays a Partir de Objetos
// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const filmes = [
    {titulo: "Sussurros do Coração", diretor: "Yoshifumi Kondō", anoLancamento: 1995},
    {titulo: "O Mundo dos Pequeninos", diretor: "Hiromasa Yonebayashi", anoLancamento: 2010},
    {titulo: "O Castelo no Céu", diretor: "Hayao Miyazaki", anoLancamento: 1986},
    {titulo: "O Túmulo dos Vagalumes", diretor: "Isao Takahata", anoLancamento: 1988},
    {titulo: "Princesa Mononoke", diretor: "Hayao Miyazaki", anoLancamento: 1997},
]

let titulos = []

filmes.forEach(filme => {
    titulos.push(filme.titulo)
})

console.log(titulos)