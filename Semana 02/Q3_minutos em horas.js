const prompt = require('prompt-sync')();

//Entrada
const minutos = Number(prompt('Quantos minutos deseja converter: '))

//Processamento
const horas = Math.floor(minutos/60)
const minuto = minutos%60

//saída
console.log(`${minutos} equivalem a ${horas}h${minuto}`)