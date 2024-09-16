# Exercicios +praTi e Codifica: lógica de programação com Javascript 

Os algoritmos que estão neste repositório fazem parte das listas de exercícios da +praTi e Codifica, que contemplam manipulação de objetos, utilizando "for in", "for of" e "forEach". Para executá-los siga o passo a passo.


## Introdução

Este documento fornece instruções detalhadas sobre como configurar e executar exercícios JavaScript localmente. 

## 💻Preparação do Ambiente 

1. **Instalar Node.js (Opcional)**:
   - Se você quiser executar os exercícios em um ambiente de servidor, instale o Node.js a partir do [site oficial](https://nodejs.org/). Esta etapa é opcional se você pretende apenas testar o código em um navegador.

2. **Escolher um Editor de Código**:
   - Use um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/) ou outro de sua preferência.

## ⚙ Configuração do Projeto

1. **Baixar a Pasta de Exercícios**:
   - Baixe o repositório por meio do GitHub Desktop, usando a linha de comando do git, ou como um arquivo zip.

   ```bash
   git clone https://github.com/seuusuario/exercicios-js.git

## 👩‍💻 Executar o código

   ```javascript
const transacoes = [
    {tipo: "entrada", valor: 150},
    {tipo: "saída", valor: 520},
    {tipo: "saída", valor: 378},
    {tipo: "entrada", valor: 410},
    {tipo: "saída", valor: 50}
]

let saldoFinal = 0

transacoes.forEach(transacao => {
    if(transacao.tipo === "entrada"){
        saldoFinal += transacao.valor
    } else if(transacao.tipo === "saída"){
        saldoFinal -= transacao.valor
    }
})

console.log(`O saldo final é de ${saldoFinal}`)
```

#### Resultado esperado
```prompt 
O saldo final é de -388
