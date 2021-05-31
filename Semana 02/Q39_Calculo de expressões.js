const prompt = require('prompt-sync')();

//entrada
const A= Number(prompt('Valor de "A": '))
const B = Number(prompt('Valor de "B": '))
const C = Number(prompt('Valor de "C": '))

//processamento
const R = (A+B)*(A+B)
const S = (B+C)*(B+C)
const D = (R+S)/2

//saida
console.log('D =(R+S)/2 , onde R=(A+B)² e S =(B+C)²')
console.log(`D = ${D}`)