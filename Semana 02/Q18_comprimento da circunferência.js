const prompt = require('prompt-sync')();

//entrada
const raio = Number(prompt('raio da circunferência(cm): '))

//processamento
const comprimento = 2 * Math.PI * raio

//saída
console.log(`O comprimento do circulo é de ${comprimento} cm`)