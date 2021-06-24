const prompt = require('prompt-sync')()

const numero = Number(prompt('Digite um valor: '))

function main(){
    if (numero%2 === 0){
        console.log(`O numero ${numero} é par`)
    }else{
        console.log(`O numero ${numero} é ímpar`)
    }
}
main()