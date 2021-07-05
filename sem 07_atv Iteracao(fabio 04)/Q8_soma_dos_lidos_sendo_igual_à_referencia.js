const prompt = require('prompt-sync')()

const referencia = Number(prompt('Valor de referencia: '))
var a =  Number(prompt('valor de soma: '))
var b =  Number(prompt('valor de soma: '))
var soma = a + b

if (soma === referencia){
    console.log (`${a} + ${b} = ${referencia}`)
}
if (soma !== referencia){
    while ( soma !== referencia){
        a = b
        a = Number(prompt('valor de soma: '))
        soma = b + a
    }
    console.log (`${b} + ${a} = ${referencia}`)
}


