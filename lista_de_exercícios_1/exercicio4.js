const prompt = require('prompt-sync')();

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

 let entrega = prompt('Informe o modo de entrega de seu pedido (PAC, Sedex ou Sedex Hoje): ')

 switch(entrega) {
    case 'PAC':
        console.log("Chegada de mercadoria em até 10 dias úteis.")
        break
    case 'Sedex':
        console.log("Chegada de mercadoria em até 1 dia útil.")
        break
    case 'Sedex Hoje':
        console.log("Chegada de mercadoria hoje.")
        break
    default:
        console.log("Entrega padrão. Chegada de mercadoria em até 15 dias úteis.")
 }
