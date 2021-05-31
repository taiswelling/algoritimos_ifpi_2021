const prompt = require('prompt-sync')();

//entrada
const dias = Number(prompt('dias: '))

//processamento
const semanas = Math.floor(dias/7)
const dia = dias%7

//saída
console.log(`${dias} dias equivale(m) a ${semanas} semana(s) e ${dia} dia(s)`)