const prompt = require('prompt-sync')();

//entrada
const base = Number(prompt('Base do retângulo(cm): '))
const altura = Number(prompt('Altura do tretângulo(cm): '))

//processamento
const area = base*altura

//saída
console.log(`A área do retângulo é de ${area} cm²`)