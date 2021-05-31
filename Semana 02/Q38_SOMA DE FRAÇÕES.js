const prompt = require('prompt-sync')();

//ENTRADA
const numerador1 = Number(prompt('Digite o numerador da primeira fração: : '))
const denominador1 = Number(prompt('Digite o denominador da primeira fração: '))

const numerador2 = Number(prompt('Digite o numerador da segunda fração: : '))
const denominador2 = Number(prompt('Digite o denominador da segunda fração: '))

//PROCESSAMENTO
const numerador = (numerador1*denominador2) + (numerador2*denominador1)

const denomiador = denominador1 * denominador2

//SAÍDA
console.log(`
A soma das frações é
${numerador}
----
${denomiador}.`)