const input = require('prompt-sync')()
console.log('*********************************************************')
console.log('Vamos calcular as raízes da sua equação de primeiro grau:')
console.log('*********************************************************')

const a = Number(input('Digite o valor de "a", diferente de zero: '))
const b = Number(input('Digite o valor de "b": '))
const c = Number(input('Digite o valor de "c": '))

//se todos os coeficientes forem diferentes de zero

const delta = ((b**2)-(4*a*c))

const x1 = (((-b) + (((b**2) - (4 * a * c))**0.5)) / 2 * a)
const x2 = (((-b) - (((b**2) - (4 * a * c))**0.5)) / 2 * a)

// se b=0
const xb1 = ((+1) * (((-1) * (c / a))**0.5))
const xb2 = ((-1) * (((-1) * (c / a))**0.5))

// se c=0
const xc1 = 0
const xc2 = (-1) * (b / a)

function main (){
    if (delta < 0){
        console.log('A equação não possui raizes reais;')

    }else if (a === 0){
        console.log('ERRO! Digite o valor de "a", diferente de zero')

    }else if (b === 0){
        console.log(`As raízes são ${xb1} e ${xb2}`)

    }else if (c === 0){
        console.log(`As raízes são ${xc1} e ${xc2}`)

    }else if ((a !== 0) && (b !== 0) && (c !== 0)){
        console.log(`As raízes são ${x1} e ${x2}`)
    }
}

main()
