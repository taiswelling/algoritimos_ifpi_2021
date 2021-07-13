const { media_dos_valores, menor_valor, maior_valor, negativos, positivos } = require("./q6_vetores")

function main(){
    const valores =  media_dos_valores('Valores: ')
    console.log(`A media dos valores digitados é ${valores}`)

    const menor = menor_valor()
    console.log(`O menor valor é ${menor}`)

    const maior = maior_valor()
    console.log(`O maior valor é ${maior}`)

    const negativo = negativos()
    console.log(`Existem ${negativo} numeros negativos`)

    const positivo = positivos()
    console.log(`Exitem ${positivo} numeros positivos`)
}

main()