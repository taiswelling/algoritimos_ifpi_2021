const prompt = require('prompt-sync')();

//entrada
const horas = Number(prompt('Quantas horas: '))
const minutos = Number(prompt('E quantos minutos: '))

// processamento
const soma_minutos = (horas* 60) + minutos

// saída
console.log(`${horas}h${minutos} corresponde a ${soma_minutos} minutos`)
