const prompt = require('prompt-sync')();

//entrada
const salario = Number (prompt('Digite o salário: '))

//processamento
const novo_salario = salario + (salario * 0.25)

//saida
console.log(`O salário com 25% de aumento ficará: R$`,novo_salario)