const prompt = require('prompt-sync')();

//entrada
const binário = Number (prompt('Digite o valor em binário( 4 digitos): '))

//processamento
const milhar = Math.floor(binário/1000)
const centena = Math.floor((binário%1000)/100)
const dezena = Math.floor((binário%100)/10)
const unidade = binário%10

const decimal = (unidade*(2**0)) + (dezena*(2**1)) + (centena*(2**2)) + (milhar*(2**3))


//saida
console.log(`${binário} em decimal é ${decimal}`)