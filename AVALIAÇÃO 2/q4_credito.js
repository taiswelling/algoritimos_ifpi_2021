const prompt = require ('prompt-sync')()

const emprestimo = Number(prompt('Valor de empréstimo : 1-para 40 mil/ 2-para 60 mil/ 3-para 81 mil): '))
const valor_parcela = Number(prompt(`Digite: 1- parcelas de 1000 reais / 2- parcelas de 1200 reais /3- para parcelas de 1500 reais: `))

function valor_da_parcela(){
    if (valor_parcela === 1 ){
        return 1000
    }
    if (valor_parcela === 2 ){
        return 1200
    }
    if (valor_parcela === 3 ){
        return 1500
    }
}

function valor_emprestimo(){
    if (emprestimo === 1 ){
        return 40000
    }
    if (emprestimo === 2 ){
        return 60000
    }
    if (emprestimo === 3 ){
        return 81000
    }
}

function main(){
    var mes = 1

    var saldo_devedor = valor_emprestimo()

    while (saldo_devedor > valor_da_parcela()){
        
        saldo_devedor = saldo_devedor
        var juros =saldo_devedor * 0.01

        saldo_devedor = saldo_devedor - valor_da_parcela()

        console.log('                                ')
        console.log(`EXTRATO DO MES ${mes}`)
        console.log (`Juros: ${juros.toFixed(2)}`)
        console.log (`Parcela fixa: ${valor_da_parcela()}`)
        console.log(`Saldo devedor anterior ao pagamento: ${saldo_devedor.toFixed(2)}`)

        saldo_devedor = saldo_devedor + juros
        
        console.log(`Saldo devedor atual: ${saldo_devedor.toFixed(2)}`)
        console.log('                                ')

        mes++
    }
    console.log(`EXTRATO DO MES ${mes}`)
    console.log (`Juros: ${juros.toFixed(2)}`)
    console.log (`Parcela fixa: ${saldo_devedor.toFixed(2)}`)
    console.log(`Saldo devedor anterior ao pagamento: ${saldo_devedor.toFixed(2)}`)
    console.log(`Saldo devedor atual: R$ 0.00`)
}

main()