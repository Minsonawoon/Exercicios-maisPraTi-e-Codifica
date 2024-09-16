# Exercicios +praTi e Codifica: lógica de programação com Javascript 

Os algoritmos que estão neste repositório fazem parte das listas de exercícios da +praTi e Codifica, que contemplam operações fundamentais, estruturas de controle condicional e de repetição. Para executá-los siga o passo a passo.


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
let num1 = 0;
let num2 = 1;

console.log("Os primeiros 10 números da sequência de Fibonacci são:");

for (let i = 0; i < 10; i++) {
    console.log(num1);  
    let proximo = num1 + num2;
    num1 = num2;
    num2 = proximo;
}
```

#### Resultado esperado
```prompt 
0
1
1
2
3
5
8
13
21
34
