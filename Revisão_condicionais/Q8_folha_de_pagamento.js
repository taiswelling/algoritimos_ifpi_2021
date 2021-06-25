const input = require('prompt-sync')()

const horas = Number(input('Quantas horas você trabalha por mês? '))
const valor = Number(input('Quanto você ganha por hora?'))

const sal_bruto = (horas * valor)

function main(){
    if (sal_bruto>0 && sal_bruto<=900){
        ir = 0
    }
    if (sal_bruto>900 && sal_bruto<=1500){
        ir = sal_bruto * 0.05
    }
    if (sal_bruto>1500 && sal_bruto<=2500){
        ir = sal_bruto * 0.1
    }
    if (sal_bruto>2500){
        ir = sal_bruto * 0.2
    }

    const inss = (sal_bruto * 0.1)
    const fgts = (sal_bruto * 0.11)

    const descontos = ir + inss

    const sal_liquido = sal_bruto - descontos

    console.log('#####################################################')
    console.log(`#Salário Bruto:({horas}*{valor}) : R$ ${sal_bruto}`)
    console.log(`#(-) IR                          : R$  ${ir}`) 
    console.log(`#(-) INSS ( 10%)                 : R$  ${inss}`)   
    console.log(`#FGTS (11%)                      : R$  ${fgts}`) 
    console.log(`#Total de descontos              : R$  ${descontos}`) 
    console.log(`#Salário Liquido                 : R$  ${sal_liquido}`)
    console.log('#####################################################')
}

main()