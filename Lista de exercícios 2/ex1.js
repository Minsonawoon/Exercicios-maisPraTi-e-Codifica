// 1. Acessando Propriedades de Objetos
// Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carro = {
    marca: "Hyundai",
    modelo: "HB20S",
    ano: 2019,
    cor: "Cinza"
}

for(let key in carro){
    console.log(carro[key])
}