const input = require('prompt-sync')()

const peso = Number(input('Qual sua massa corporal(em kg)?'))
const altura = Number(input('Qual sua altura(em metros)?'))

const imc = peso / (altura**2)

function main() {
    if (imc < 25){
        console.log('---------------')
        console.log('Você está com com o peso NORMAL;')
        console.log('---------------')


    }else if( imc > 25 && imc < 30){
        console.log('---------------')
        console.log('Você está OBESO;')
        console.log('---------------')

    }else if (imc>30){
        console.log('---------------')
        console.log('Você sofre de OBESIDADE MÓRBIDA ;')
        console.log('---------------')
    }
}

main()