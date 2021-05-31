const prompt = require('prompt-sync')();

//entrada
const meses = Number(prompt('meses: '))

//processamento
const anos = Math.floor(meses/12)
const mes = meses%12

//saida
console.log(`${meses} meses equivalem a ${anos} ano(s) e ${mes} meses.`)
