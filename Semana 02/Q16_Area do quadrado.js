const prompt = require('prompt-sync')();

//entrada
const lado = Number(prompt('Lado do quadrado(cm): '))

//processamento
const area = lado*lado

//saída
console.log(`A área do quadrado é de ${area} cm²`)