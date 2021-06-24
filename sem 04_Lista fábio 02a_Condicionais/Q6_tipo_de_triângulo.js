const prompt = require('prompt-sync')()

const angulo1 = Number(prompt('1º ÂNGULO: '))
const angulo2 = Number(prompt('2º ÂNGULO: '))
const angulo3 = Number(prompt('3º ÂNGULO: '))

const soma_angulos = angulo1 + angulo2 +angulo3

function eh_triangulo(){
    if (soma_angulos === 180){
        return true
    }
}

function nao_eh_triangulo(){
    if (soma_angulos > 180 || soma_angulos < 180){
        return true
    }
}

function main(){
    if (eh_triangulo){
        if (angulo1 > 90|| angulo2 > 90 || angulo3 > 90){
            console.log('OBTUSÂNGULO')
        }else if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90){
            console.log('RETÂNGULO')
        }else if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
            console.log('ACUTÂNGULO')
        }
    }
    if ((nao_eh_triangulo)){
        console.log('Os angulos inseridos não formam triângulo')
    }
}
main()