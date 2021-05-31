const prompt = require('prompt-sync')();

//entrada
const notaa = Number (prompt('Primeira nota: '))
const notab = Number (prompt('Segunda nota: '))

const peso1 = Number (prompt('Peso 1: '))
const peso2 = Number (prompt('Peso 2: '))

//processamento
const média = ((notaa*peso1)+(notab*peso2))/(peso1+peso2)

//saida
console.log(`A média ponderada será`,média)