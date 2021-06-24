const input = require ('prompt-sync')()

const num1 = Number(input(`Digite o primeiro número inteiro: `))
const num2 = Number (input(`Digite o segundo número inteiro: `))
const operador = Number (input(`______________________________
Digite o código da operação que deseja realizar:
1 para Adição
2 para Subtração
3 para Multiplicação
4 para  Divisão:
`))

function main() {
    if (operador === 1){
        console.log (`A  soma dos valores é ${num1 + num2}`)
    }else if (operador === 2){
        console.log (`A  subtração de ${num1} por ${num2} = ${num1 - num2}`)
        console.log (`A  subtração de ${num2} por ${num1} = ${num2 - num1}`)
    }else if (operador === 3){
        console.log (`A multiplicação dos valores é ${num1 * num2}`)
    }else if (operador === 4){
        console.log (`A  divisão de ${num1} por ${num2} = ${num1 / num2}`)
        console.log (`A  divisão de ${num2} por ${num1} = ${num2 / num1}`) 
    }else{
        console.log('OPÇÃO INVÁLIDA')
    }
}

main()