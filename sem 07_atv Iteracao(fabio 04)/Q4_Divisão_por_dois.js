const prompt = require('prompt-sync')()

const numero = Number (prompt('Número: '))
var divisao = numero / 2

function main(){
    while (divisao > 1){
        divisao = divisao / 2
    }
    console.log (divisao)
}

main()