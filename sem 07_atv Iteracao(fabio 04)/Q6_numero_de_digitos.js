const prompt = require('prompt-sync')()

var valor = Number(prompt('Valor: '))

/*console.log('O Valor digitado possui '+ valor.length +' unidades de código')*/ //contagem de digitos pelo uso de .length

function main(){
    var divisao = valor / 10
    var digitos = 1

    while (divisao > 1 ){
        divisao = divisao / 10
        digitos ++
    }
    console.log (digitos)
}

main()