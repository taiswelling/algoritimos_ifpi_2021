const input = require('prompt-sync')()

const a0 = Number(input('Digite o valor inicial da P.A: '))
const r = Number(input('Digite a razão da P.A: '))
const limite = Number(input('Digite o limite da P.A: '))

var n = 1
var valor = 0

function main(){
    for (a0; valor < limite;){
        valor = a0 + ((n-1) * r)
        console.log(valor)
        n++
    }
}
main()