const prompt = require('prompt-sync')();

//entrada
const m = Number(prompt('metros: '))

//processamento
const km = Math.floor(m/1000)
const m2 = m%1000

//saída
console.log(`${m} metros equivale(m) a ${km}km e ${m2} metros`)