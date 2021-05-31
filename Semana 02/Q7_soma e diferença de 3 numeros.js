const prompt = require('prompt-sync')();

//ENTRADA
const numero1 = Number(prompt('1º número: '))
const numero2 = Number(prompt('2º número: '))
const numero3 = Number(prompt('3º número: '))

//PROCESSAMENTO
const soma = numero1 + numero2
const diferença = numero2 - numero3

//SAÍDA
console.log(`A SOMA DOS DOIS PRIMEIROS NÚMEROS É ${soma}`)
console.log(`A DIFERENÇA ENTRE DOIS PRIMEIROS NÚMEROS É ${diferença}`)