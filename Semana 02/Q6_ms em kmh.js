const prompt = require('prompt-sync')();
//ENTRADA
const velocidade = Number(prompt('Velocidade (m/s) '))

//PROCESSAMENTO
const kmh = Number (velocidade * 3.6)

//SAÍDA
console.log(`A velocidade inserida corresponde a ${kmh} km/h`)
