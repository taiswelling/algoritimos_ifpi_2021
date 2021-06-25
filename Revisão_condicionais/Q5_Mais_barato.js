const input = require('prompt-sync')()

const val1 = Number(input("Primeiro valor: "))
const val2 = Number(input("Segundo valor: "))
const val3 = Number(input("Terceiro valor: "))

function main(){
    if (val1 === val2 && val2 === val3){
        console.log(`Todos os valores digitados são iguais.
Assim, não existirá um menor valor.`)

    }else if (val1 === val2 && val1 < val3){
        console.log(`O menor valor é R$ ${val1}`)

    }else if (val1 === val3 && val1 < val2){
        console.log(`O menor valor é R$ ${val1}`)

    }else if (val2 === val3 && val2 < val1){
        console.log(`O menor valor é R$ ${val2}`)

    }else if (val1 < val2 && val1 < val3){
        console.log(`O menor valor é R$ ${val1};`)

    }else if (val2 < val1 && val2 < val3){
        console.log(`O menor valor é R$ ${val2};`)

    }else if (val3 < val1 && val3 < val2){
        console.log(`O menor valor é R$ ${val3};`)
    }
}

main()