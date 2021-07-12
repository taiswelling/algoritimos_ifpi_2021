const input = require('prompt-sync')()

const n = Number(input('DIGITE O VALOR DE N: '))

var resultado = 0
var n1 = 0

function main (){
    for (1; n1< n; n){
        n1++
        resultado = resultado + n1
    }

    console.log(resultado)
}
main()