const prompt = require('prompt-sync')()

function main (){
    //Entrada
    const valor_1 = Number(prompt('Primeiro número: '))
    const valor_2 = Number(prompt('Segundo número: '))
    const valor_3 = Number(prompt('Terceiro número: '))

    //processamento e saída
    if (valor_1 > valor_2 && valor_1 > valor_3){
        console.log(`${valor_1} é o maior valor digitado`)
    }else if (valor_2 > valor_1 && valor_2 > valor_3){
        console.log(`${valor_2} é o maior valor digitado`)
    }else if (valor_3 > valor_1 && valor_3 > valor_2){
        console.log(`${valor_3} é o maior valor digitado`)
    }
}

main()