// 3. Filtrando Propriedades de Objetos
// Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let produto = {
    nome: "Lápis",
    marca: "Bic",
    cor: "Azul",
    tipo: "Oleoso",
    preco: 15,
    estoque: 36
}

function propriedades(objeto, valorEspecifico){
    let novoObjeto = {}

    for(let key in objeto){
        if (objeto[key] > valorEspecifico){
            novoObjeto[key] = objeto[key]
        }
    }

    return novoObjeto
}

let filtrarPropriedades = propriedades(produto, 12)

console.log(filtrarPropriedades)