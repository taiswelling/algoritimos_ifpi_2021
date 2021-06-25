const input = require ('prompt-sync')()

const valor = Number(input(`Quanto você recebe?  `))

const porcento1 = (valor * 0.2)
const aumento1 = valor + porcento1

const porcento2 = (valor * 0.15)
const aumento2 = valor + porcento2

const porcento3 = (valor * 0.1)
const aumento3 = valor + porcento3

const porcento4 = (valor * 0.05)
const aumento4 = valor + porcento4

if (valor <= 280){
    console.log(`Você recebe R$ ${valor}`)
    console.log(`Você terá 20% de aumento`)
    console.log(`Essa porcentagem corresponde à R$ ${porcento1}`)
    console.log(`Seu novo salário será R$ ${aumento1};`)
}
if (valor > 280 && valor <= 700){
    console.log(`Você recebe R$ ${valor}`)   
    console.log(`Você terá 15% de aumento`)
    console.log(`Essa porcentagem corresponde à R$ ${porcento2}`)
    console.log(`Seu novo salário será R$ ${aumento2};`)
}
if (valor > 700 && valor <= 1500){
    console.log(`Você recebe R$ ${valor}`)   
    console.log(`Você terá 10% de aumento`)
    console.log(`Essa porcentagem corresponde à R$ ${porcento3}`)
    console.log(`Seu novo salário será R$ ${aumento3};`)
}
if (valor > 1500){
    console.log(`Você recebe R$ ${valor}`)   
    console.log(`Você terá 5% de aumento`)
    console.log(`Essa porcentagem corresponde à R$ ${porcento4}`)
    console.log(`Seu novo salário será R$ ${aumento4};`)
}
 