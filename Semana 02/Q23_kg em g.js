const prompt = require('prompt-sync')();

//entrada
const kg = Number(prompt('kg: '))

//processamento
const g = kg*1000

//saída
console.log(`${kg}kg equivale(m) a ${g}g`)