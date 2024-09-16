// 6. Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    {nome: "Patricia", cargo: "Gerente", salario: 5050},
    {nome: "Marcos", cargo: "Assistente Administrativo", salario: 2100},
    {nome: "Jorge", cargo: "Assistente Administrativo", salario: 2100},
    {nome: "Maria", cargo: "Marketing", salario: 2300}
]

for(let funcionario of funcionarios){
    if(funcionario.salario > 2100){
        console.log(`${funcionario.nome}, tem salário maior que 2100, sendo de ${funcionario.salario}.`)
    }
}
