const input = require('prompt-sync')()

console.log(`Respondas as  perguntauntas a seguir:
Responda apenas SIM ou NÃO(exatamente neste formato);`)

const pergunta1 = String(input('Telefonou para a vítima ? ')).toUpperCase()
const pergunta2 = String(input('Esteve no local do crime ? ')).toUpperCase()
const pergunta3 = String(input('Mora perto da vítima ? ')).toUpperCase()
const pergunta4 = String(input('Devia para a vítima ? ')).toUpperCase()
const pergunta5 = String(input('Já trabalhou com a vítima ? ')).toUpperCase()

//CONTADOR

if ( pergunta1 ==='NÃO'){
    contador = 0
}else if (pergunta1==='SIM'){
    contador = 1
}else{
    console.log('O primeiro valor foi digitado INCORRETAMENTE!\nTente novamente!\nLembrando: os valores aceitos são "SIM" e "NÃO", com letras maísculas e acentuação.')
    console.log('_______________________________________________________________________')
}

if  (pergunta2 === 'NÃO'){
    contador += 0
}else if (pergunta2 === 'SIM'){
    contador += 1
}else{
    console.log('O segundo valor foi digitado INCORRETAMENTE!\nTente novamente!\nLembrando: os valores aceitos são "SIM" e "NÃO", com letras maísculas e acentuação.')
    console.log('_______________________________________________________________________')
}

if  (pergunta3 === 'NÃO'){
    contador += 0
}else if (pergunta3 === 'SIM'){
    contador += 1
}else{
    console.log('O terceiro valor foi digitado INCORRETAMENTE!\nTente novamente!\nLembrando: os valores aceitos são "SIM" e "NÃO", com letras maísculas e acentuação.')
    console.log('_______________________________________________________________________')
}

if  (pergunta4 === 'NÃO'){
    contador +=  0
}else if (pergunta4 === 'SIM'){
    contador +=  1
}else{
    console.log('O quarto valor foi digitado INCORRETAMENTE!\nTente novamente!\nLembrando: os valores aceitos são "SIM" e "NÃO", com letras maísculas e acentuação.')
    console.log('_______________________________________________________________________')
}

if (pergunta5 === 'NÃO'){
    contador +=  0
}else if (  pergunta5==='SIM'){
    contador +=  1
}else{
    console.log('O quinto valor foi digitado INCORRETAMENTE!\nTente novamente!\nLembrando: os valores aceitos são "SIM" e "NÃO", com letras maísculas e acentuação.')

}

//RESULTADO
if (contador === 1 || contador === 0){
    console.log('xxxxxxxxxxxxxxxx')
    console.log('Você é inocente!')
    console.log('xxxxxxxxxxxxxxxx')

}else if ( contador === 2){
    console.log('xxxxxxxxxxxxxxxxxxx')
    console.log('Você é um suspeito!')
    console.log('xxxxxxxxxxxxxxxxxxx')

}else if ( contador ===3 || contador === 4){
    console.log('xxxxxxxxxxxxxxxx')
    console.log('Você é cúmplice!')
    console.log('xxxxxxxxxxxxxxxx')

}else if ( contador === 5){
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx')
    console.log('Você é culpado! ESTÁ PRESO!')
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx')
}