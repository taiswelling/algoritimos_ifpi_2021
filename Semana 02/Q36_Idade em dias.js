const prompt = require('prompt-sync')();

//entrada
console.log('Digite sua idade em anos, meses e dias:')

const anos = Number(prompt('Anos: '))
const meses = Number(prompt('Meses: '))
const dias = Number(prompt('Dias: '))

//processamento
const ano_em_dias = anos * 365
const meses_em_dias = meses * 30 //considerando que os meses possuem 30 dias
const total_dias = dias + meses_em_dias + ano_em_dias

//saida
console.log(`Você tem, até hoje ${total_dias} dias de vida`)