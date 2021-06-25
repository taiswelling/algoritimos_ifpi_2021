const input = require('prompt-sync')()

const pergunta1 = String(input('O QUE DESEJA COMPRAR? Use "G" para GASOLINA e "A" para ÁLCOOL: '))
const pergunta2 = Number(input('Quantos litros você deseja: '))

const valor_alcool = pergunta2 * 1.9
const desconto_alcool_3 = valor_alcool * 0.03
const desconto_alcool_5 = valor_alcool * 0.05

const valor_gasolina = pergunta2 * 2.5
const desconto_gasolina_4 = valor_gasolina * 0.04
const desconto_gasolina_6 = valor_gasolina * 0.06

if ( pergunta1 === ('g' || 'G') && pergunta2 <= 20){
    const total1 = valor_gasolina-desconto_gasolina_4
    console.log(`Você dejesa ${pergunta2} litros de Gasolina.\nVocê deverá pagar ${total1}`)
}
if ( pergunta1 === ('g' || 'G') && pergunta2 > 20){
    const total2 = valor_gasolina-desconto_gasolina_6
    console.log(`Você dejesa ${pergunta2} litros de Gasolina.\nVocê deverá pagar ${total2}`)
}
if ( pergunta1 === ('a' || 'A') && pergunta2 <= 20){
    const total3 = valor_alcool-desconto_alcool_3
    console.log(`Você dejesa ${pergunta2} litros de Gasolina.\nVocê deverá pagar ${total3}`)
}   
if ( pergunta1 === ('a' || 'A') && pergunta2 <= 20){
    const total4 = valor_alcool-desconto_alcool_5
    console.log(`Você dejesa ${pergunta2} litros de Gasolina.\nVocê deverá pagar ${total4}`)
}