const input = require ('prompt-sync')()


console.log('Digite os três lados de um triângulo:')

const lado1 = Number(input('LADO 1:  '))
const lado2 = Number(input('LADO 2:  '))
const lado3 = Number(input('LADO 3:  '))

function main(){
    if (lado1 === lado2 === lado3){
        console.log(`Os lados inseridos  formam um triângulo equilátero.
        Triângulos equiláteros não possuem hipotenusa e catetos.`)

    //Valores inválidos
    }else if (lado1 === lado2 && lado1 > lado3){
        console.log('Erro! Insira valores possíveis!')

    }else if (lado1 === lado3 && lado1 > lado2){
        console.log('Erro! Insira valores possíveis!')

    }else if (lado3 === lado2 && lado3 > lado1){
        console.log('Erro! Insira valores possíveis!')

    //valores válidos
    }else if (lado1 > lado2 && lado1 > lado3){
        const h1 = lado1**2
        const c1 = (lado2**2) + (lado3**2)
        if (h1 === c1){
            console.log(`A hipotenusa é ${lado1} e os catetos são ${lado2} e ${lado3}`)
        }else{
            console.log(`os valores inseridos não formam um triângulo retângulo.
        Portanto não possui catetos nem hipotenusa.`)
        }

    }else if (lado2 > lado1 && lado2 > lado3){
        const h2 = lado2**2
        const c2 = (lado1**2) + (lado3**2)
        if (h2 === c2){
            console.log(`A hipotenusa é ${lado2} e os catetos são ${lado1} e ${lado3}`)
        }else{
            console.log(`os valores inseridos não formam um triângulo retângulo.
            Portanto não possui catetos nem hipotenusa`)
        }

    }else if (lado3 > lado1 && lado3 > lado2){
        const h3 = lado3**2
        const c3 = (lado2**2) + (lado1**2)
        if (h3 === c3){
            console.log(`A hipotenusa é ${lado3} e os catetos são ${lado2} e ${lado1}`)
        }else{
            console.log(`0s valores inseridos não formam um triângulo retângulo.
            Portanto não possui catetos nem hipotenusa.`)
        }
    }
}

main()