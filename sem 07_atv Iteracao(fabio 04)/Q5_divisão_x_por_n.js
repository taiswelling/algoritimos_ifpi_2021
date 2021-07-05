const prompt = require('prompt-sync')()

var x = Number (prompt('X: '))
var n = Number (prompt('N: '))

var divisao = x / n

function main(){
    while (n > 2){
        x = divisao
        n = n - 1
        divisao = x / n
    }
    console.log(divisao)
}
main()