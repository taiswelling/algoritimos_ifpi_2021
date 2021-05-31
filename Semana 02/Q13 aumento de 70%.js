const prompt = require('prompt-sync')();

//entrada
const valor = Number (prompt('Digite o valor em real: '))

//processamento
const porcentagem = valor * 0.70

//saida
console.log(`70% deste valor é R$`,porcentagem)