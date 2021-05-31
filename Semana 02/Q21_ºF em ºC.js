const prompt = require('prompt-sync')();

//entrada
const temperatura_F = Number(prompt('Temperatura em ºF: '))

//processamento
const temperatura_C = ((5 * temperatura_F) - 160)/9

//saída
console.log(`${temperatura_F}ºF equivale a ${temperatura_C}ºC`)