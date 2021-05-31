const prompt = require('prompt-sync')();

//entrada
const km = Number(prompt('km: '))

//processamento
const m = km*1000

//saída
console.log(`${km}km equivale(m) a ${m}m`)