// 14. Manipulando Objetos Complexos
// Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

const empresa = {
    departamentos: [
        {nome: "RH",
            funcionarios: [
                {nome: "Mari"},
                {nome: "Josefer"}
            ]
        },

        {nome: "Marketing",
            funcionarios: [
                {nome: "Pedro"},
                {nome: "Micael"}
            ]
        },

        {nome: "Logística",
            funcionarios: [
                {nome: "Leandro"},
                {nome: "Emilia"}
            ]
        }
    ]
}

for(let setores in empresa.departamentos){
    let departamento = empresa.departamentos[setores]
    console.log(`Departamento: ${departamento.nome}`)


    for(let funcionario of departamento.funcionarios){
        console.log(`Funcionário: ${funcionario.nome}.`)
    }
}