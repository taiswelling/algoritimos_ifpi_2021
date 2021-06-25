const input = require('prompt-sync')()

const numero =  Number(input('Digite um número:'))
const numero1 = Math.trunc(numero/1)

function main(){
    if (numero === numero1){
        console.log(`O valor digitado é um número inteiro.`)

    }else{
        console.log(`O valor digitado é um número decimal.`)
    }
}
main()