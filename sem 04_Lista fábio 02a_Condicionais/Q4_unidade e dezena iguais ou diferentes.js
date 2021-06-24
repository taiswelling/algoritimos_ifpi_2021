const prompt = require('prompt-sync')()

const numero = Number(prompt('Digite um número de 2 dígitos: '))

function main (){
    if((Math.floor(numero / 10)) === (numero%10)){
        console.log('A unidade e a dezena 21do número digitado são IGUAIS')
    }else{
        console.log('A unidade e a dezesena do número digitado são DIFERENTES')
    }
}

main()