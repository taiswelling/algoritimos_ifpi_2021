const prompt = require('prompt-sync')();

//entrada
const base = Number(prompt('Base do triângulo(cm): '))
const altura = Number(prompt('Altura do triângulo(cm): '))

//processamento
const area = (base*altura)/2

//saída
console.log(`A área do triângulo é de ${area} cm²`)