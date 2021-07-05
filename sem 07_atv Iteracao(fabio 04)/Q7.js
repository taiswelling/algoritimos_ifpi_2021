const prompt = require('prompt-sync')()

const valor_comparacao = Number(prompt('Valor de comparação: '))
var valor = Number(prompt('Valor a ser comparado: '))

function main(){
    while (valor !== valor_comparacao){
        valor = Number(prompt('Valor a ser comparado: '))
    }
}
main()

console.log ('O valor digitado foi igual ao valor de comparação.')
console.log('FIM')
