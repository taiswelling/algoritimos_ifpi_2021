const prompt = require('prompt-sync')()

console.log('######## PAGAMENTO TOTAL ########')

function calculo_comissão(total_vendas){

    if (total_vendas <= 5000){
        return 0
    }else if(total_vendas > 5000 && total_vendas <= 10000){
        const diferença = total_vendas - 5000
        return 0.05 * diferença
    }else if(total_vendas >10000 && total_vendas <= 30000){
        const diferença = total_vendas - 10000
        return (0.05 * 5000) + (0.1 * diferença)
    }else if(total_vendas > 30000){
        return (0.2 * total_vendas)
    }
}

function main(){
    const nome = String (prompt ('Seu nome: '))
    const total_vendas = Number(prompt ('Total de vendas no mês: '))

    const comissão = calculo_comissão(total_vendas)
    
    const pagamento = comissão + 1100

    if (total_vendas <= 5000){
        console.log(`${nome}, esse mês você receberá R$ 1100,00`)
    }else if(total_vendas > 5000 && total_vendas <= 10000){
        console.log(`${nome}, esse mês você receberá R$ ${pagamento}`)
    }else if(total_vendas > 10000 && total_vendas <= 30000){
        console.log(`${nome}, esse mês você receberá R$ ${pagamento}`)
    }else if(total_vendas > 30000){
        console.log(`${nome}, esse mês você receberá R$ ${pagamento}`)
    }
}

main ()
