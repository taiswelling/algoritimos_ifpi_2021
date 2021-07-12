const input = require('prompt-sync')()

console.log (`1)soma 
2)subtração
3)multiplicação
4)divisão:`)
var valor = input (`Digite o valor correspondente: `)
var numero = Number(input(`De que numero: `))

n = 0

if (valor  === '1' || valor === 'soma'){
    for (n; n <= 10;){
        num = numero + n
        console.log(`${numero} + ${n} = ${num}`)
        n++
    }
}
if (valor === '2' || valor === 'subtração'){
    for (n; n <= 10;){
        num = numero - n
        console.log(`${numero} - ${n} = ${num}`)
        n++
    }
}
if (valor === '3' || valor === 'multiplicação'){
    for (n; n <= 10;){
        num = numero * n
        console.log(`${numero} * ${n} = ${num}`)
        n++
    }
}
if (valor === '4' || valor === 'divisão'){
    for (n; n <= 10;){
        num = numero / n
        console.log(`${numero} / ${n} = ${num}`)
        n++
    }
}