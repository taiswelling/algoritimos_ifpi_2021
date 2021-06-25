const input = require('prompt-sync')()

console.log('Respondas as perguntas a seguir:\nResponda apenas SIM ou NÃO(exatamente neste formato):')

const morango =  Number(input('Deseja comprar morangos?Em caso afirmarivo, digite a quantidade em kg. Em negativo, digite "0" '))
const maca = Number(input('Deseja comprar maçãs?Em caso afirmarivo, digite a quantidade em kg. Em negativo, digite "0"; '))




const preco_morango1  = morango  * 2.5
const preco_morango2  = morango  * 2.20

const preco_maca1  = maca  * 1.8
const preco_maca2  = maca  * 1.5

if( morango <= 5){
    preco_morango  = preco_morango1
}
if( morango > 5){
    preco_morango  = preco_morango2
}
if( maca <= 5){
    preco_maca  = preco_maca1
}
if( maca>5){
    preco_maca  = preco_maca2
}

preco  = preco_morango + preco_maca
kg  = morango + maca
desconto  = preco  * 0.1


if( preco>25 || kg>8){
    preco = preco - desconto
}
console.log(`O valor final da sua compra é R$${preco}`)