const prompt = require('prompt-sync')();

//entrada
const valor_dolar = Number (prompt('Valor do dolar em real: '))
const valor_converter = Number (prompt('Quantos dolares deseja converter: '))

//processamento
const dolar_em_real = valor_converter * valor_dolar

//saida
console.log(`${valor_converter} dólar(es) corresponde a ${dolar_em_real}`)