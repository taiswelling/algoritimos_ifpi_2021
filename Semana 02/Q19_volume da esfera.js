const prompt = require('prompt-sync')();

//entrada
const raio = Number(prompt('raio da esfera(cm): '))

//processamento
const volume = (4 * Math.PI * (raio**3))/3

//saída
console.log(`O volume da esfera é de ${volume} cm³`)
