const input = require('prompt-sync')()

const num = Number (input('Digite um numero qualquer, fracionado: '))

function main(){
    const arredondar = Math.round(num)
    console.log(`O numero digitado, de forma arredondada é: ${arredondar}`)
}

main()