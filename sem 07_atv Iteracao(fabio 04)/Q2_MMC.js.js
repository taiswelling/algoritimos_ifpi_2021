const prompt = require('prompt-sync')()

const numero1 = Number (prompt('Digite o primeiro numero: '))
const numero2 = Number (prompt('Digite o segundo  numero: '))

var mmc = 1

while (!(mmc % numero1 === 0 && mmc % numero2 === 0)){
    mmc++
}

console.log(`O mmc de ${numero1} e ${numero2} é ${mmc}`)