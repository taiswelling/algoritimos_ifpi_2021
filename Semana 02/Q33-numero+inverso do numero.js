const prompt = require('prompt-sync')();

//entrada
const numero = Number (prompt('Digite um numero de 3 dígitos: '))

//processamento
const centena = Math.floor(numero/100)
const dezena = Math.floor((numero%100)/10)
const unidade = numero%10

const inverso = (unidade*100)+(dezena*10)+centena

const soma = numero + inverso


//saida
console.log('A soma do numero digitado com seu inverso é', soma)