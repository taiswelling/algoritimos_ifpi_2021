const prompt = require('prompt-sync')();

//entrada
const anos = Number(prompt('Quantos anos fumando: '))
const cigarros_por_dia = Number(prompt('Quantos cigarros por dia: '))
const preco = Number(prompt('Valor da carteira: '))

//processamento
const total_dias = anos*365
const total_cigarros = total_dias*cigarros_por_dia
const valor_total = (total_cigarros/20)*preco // tomando por base 20 cigarros em uma carteira

//saida
console.log(`O gasto de cigarros até hoje foi de , aproximadamente= R$${valor_total}`)
