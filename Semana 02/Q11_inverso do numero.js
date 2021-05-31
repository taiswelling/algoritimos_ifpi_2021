const prompt = require('prompt-sync')();

//entrada
const numero = Number (prompt('Digite um numero de 3 dígitos: '))

//processamento
const centena = Math.floor(numero/100)
const dezena = Math.floor((numero%100)/10)
const unidade = numero%10

//saida
console.log(`O inverso de ${numero} é ${unidade}${dezena}${centena}`)