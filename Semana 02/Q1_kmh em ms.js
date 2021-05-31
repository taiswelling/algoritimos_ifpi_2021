const prompt = require('prompt-sync')();
//ENTRADA
const velocidade = Number(prompt('Velocidade (km/s) '))

//PROCESSAMENTO
const ms = Number (velocidade / 3.6)

//SAÍDA
console.log(`A velocidade inserida corresponde a ${ms} km/h`)