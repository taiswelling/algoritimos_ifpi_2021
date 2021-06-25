const input = require('prompt-sync')()

const dia = Number(input('Digite um número de 1 a 7: '))

function main(){
    if (dia === 1){
        console.log('O número 1 corresponde ao primeiro dia da semana, que é DOMINGO;')

    }else if (dia === 2){
        console.log('O número 2 corresponde ao segundo dia da semana, que é SEGUNDA;')

    }else if (dia === 3){
        console.log('O número 3 corresponde ao terceiro dia da semana, que é TERÇA;')

    }else if (dia === 4){
        console.log('O número 4 corresponde ao quarto dia da semana, que é QUARTA;')

    }else if (dia === 5){
        console.log('O número 5 corresponde ao quinto dia da semana, que é QUINTA;')

    }else if (dia === 6){
        console.log('O número 6 corresponde ao sexto dia da semana, que é SEXTA;')

    }else if (dia === 7){
        console.log('O número 7 corresponde ao sétimo dia da semana, que é SÁBADO;')

    }else{
        console.log('ERRO!\nVocê inseriu um valor inválido!\nTente novamente!')
    }
}

main ()