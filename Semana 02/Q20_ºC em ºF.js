const prompt = require('prompt-sync')();

//entrada
const temperatura_C = Number(prompt('Temperatura em C: '))

//processamento
const temperatura_F = ((9 * temperatura_C) + 160)/5

//saída
console.log(`${temperatura_C}ºC equivale a ${temperatura_F}ºF`)
