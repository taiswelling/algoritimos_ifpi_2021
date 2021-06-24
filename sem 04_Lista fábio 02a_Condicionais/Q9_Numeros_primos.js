const input = require('prompt-sync')()

const n = Number(input('Digite um número inteiro entre 1 e 100:  '))
const resto2 = n % 2
const resto3 = n % 3

function main(){
    if (n === 2 || n === 3){
        console.log('O número digitado é primo.')
    }else{
            if (resto2 === 0 || resto3 === 0){
                console.log('O número digitado não é primo.')
            }else{
                console.log('O número digitado é primo.')
            }
    }
}

main()