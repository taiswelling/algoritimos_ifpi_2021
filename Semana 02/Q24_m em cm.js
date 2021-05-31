const prompt = require('prompt-sync')();

//entrada
const m = Number(prompt('Metros: '))

//processamento
const cm = m*100

//saída
console.log(`${m}m equivale(m) a ${cm}cm`)