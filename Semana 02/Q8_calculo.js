const prompt = require('prompt-sync')();

//ENTRADA
const n1 = Number(prompt('1º número: '))
const n2 = Number(prompt('2º número: '))

//PROCESSAMENTO
const resultado = (n1+n2) / (n1-n2)

//SAÍDA
console.log(`A divisão da soma pela diferença dos numeros digitados é:`, resultado)