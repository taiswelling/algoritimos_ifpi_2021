const prompt = require('prompt-sync')();

//ENTRADA
const n1 = Number(prompt('1º número inteiro: '))
const n2 = Number(prompt('2º número inteiro: '))

//PROCESSAMENTO
const quociente = Math.floor(n1/n2)
const resto = n1%n2

//SAÍDA
console.log(`o quociente da divisão é ${quociente} e o resto é ${resto}`)