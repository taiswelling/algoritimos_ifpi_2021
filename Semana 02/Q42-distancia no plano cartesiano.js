const prompt = require('prompt-sync')();

//Entrada
const x1 = Number(prompt('X1: '))
const y1 = Number(prompt('Y1: '))

const x2 = Number(prompt('X2: '))
const y2 = Number(prompt('Y2: '))

//processamento
const distancia = Math.sqrt(((x2-x1)**2)+((y2-y1)**2))

//saída
console.log('A distância entre os pontos é de ', distancia)
