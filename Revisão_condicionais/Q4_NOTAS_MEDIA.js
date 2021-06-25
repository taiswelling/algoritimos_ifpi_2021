const input = require('prompt-sync')()

const nota1 = Number(input('Primeira nota: '))
const nota2 = Number(input('Segunda nota: '))

const media = (nota1 + nota2) / 2

function main(){
    if (nota1 > 10 || nota1 < 0){
        console.log(`Erro! O valor inserido não corresponde a notas válidas!
        Tente novamente
        (OBS: os valores válidos são de 0.0 a 10.0`)

    }else if (nota2 > 10 || nota2 < 0){
        console.log(`Erro! O valor inserido não corresponde a notas válidas!
        Tente novamente
        (OBS: os valores válidos são de 0.0 a 10.0`)

    }else if (media === 10){
        console.log('.......................')
        console.log('Aprovado com distinção') 
        console.log('.......................')

    }else if (media >= 7){
        console.log('...........')
        console.log('Aprovado!')
        console.log('...........')

    }else if (media < 7){
        console.log('...........')
        console.log('Reprovado')
        console.log('...........')
    }
}
main()