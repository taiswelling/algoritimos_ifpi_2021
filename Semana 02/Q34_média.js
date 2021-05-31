const prompt = require('prompt-sync')();

//entrada
const n1 = Number (prompt('Digite o primeiro valor: '))
const n2 = Number (prompt('Digite o segundo valor: '))
const n3 = Number (prompt('Digite o terceiro valor: '))

//processamento
const média = (n1+n2+n3)/3

//saida
console.log('A média dos valores digitados é' ,média)
