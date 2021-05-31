const prompt = require('prompt-sync')();

const dias = Number(prompt('Digite sua idade em dias:'))

//processamento
const anos = Math.floor(dias/365)
const meses = Math.floor((dias%365)/30)
const dia = (dias%365)%30

//saida
console.log(`Você tem ${anos} anos, ${meses} meses e ${dia} dias`)
