const prompt = require('prompt-sync')()

function main (){
    //Entrada
    const valor_1 = Number(prompt('Primeiro número: '))
    const valor_2 = Number(prompt('Segundo número: '))
    //processamento e saída
    if (valor_1>valor_2){
        console.log(`${valor_1} é o maior; ${valor_2} é o menor`)
    }else{
        console.log(`${valor_2} é o maior; ${valor_1} é o menor.`)
    }

}

main()