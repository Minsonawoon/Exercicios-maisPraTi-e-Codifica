// 2. Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: "Lógica de Programação e Algoritmos com Javascript",
    autor: "Edécio Fernando Iepsem",
    anoPublicacao: 2018,
    genero: "Programação de Computadores"
}

let temEditora = false

for(let key in livro){
    if(key === "editora"){
        temEditora = true
    } 
}

if (!temEditora) {
    livro.editora = "Novatec";
}

console.log(livro)