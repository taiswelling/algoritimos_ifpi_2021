const prompt = require('prompt-sync')()

function calculo_consumo (leitura_atual, leitura_anterior){
    return leitura_atual - leitura_anterior
}

function calculo_tarifa(consumo){
    if (consumo <= 30){
        return 0
    }else if (consumo >30 && consumo <=100){
        return consumo * 0.59
    }else if (consumo > 100){
        return consumo * 0.75
    }
}

function calculo_bandeira(consumo){
    if (consumo < 100){
        return 0
    }else if (consumo >= 100){
        return ((Math.floor(consumo/100)) * 8.00)
    }
}

function calculo_icms(valor_faturado){
    return valor_faturado * 0.25
}

function calculo_pis_confis(valor_faturado){
    return valor_faturado * 0.15
}

function calculo_taxa_iluminação(consumo,valor_faturado){
    if (consumo <= 80){
        return 0
    }else if (consumo >80){
        return valor_faturado * 0.06
    }
}

function main(){
    const leitura_atual = Number(prompt('Leitura atual(KWh): '))
    const leitura_anterior = Number(prompt('Leitura anterior(KWh): '))

    const consumo = calculo_consumo (leitura_atual, leitura_anterior)
    const tarifa = calculo_tarifa(consumo)
    const valor_faturado = tarifa
    const bandeira = calculo_bandeira(consumo)
    const icms = calculo_icms(valor_faturado)
    const pis_confis = calculo_pis_confis(valor_faturado)
    const taxa_iluminação = calculo_taxa_iluminação(consumo, valor_faturado)
    const talão = valor_faturado + bandeira +icms + pis_confis + taxa_iluminação

    console.log('*************************************')
    console.log('Consumo(KWh):      ', consumo)
    console.log('Valor faturado:  R$', valor_faturado.toFixed(2))
    console.log('Bandeira:        R$', bandeira.toFixed(2))
    console.log('ICMS:            R$', icms.toFixed(2)) 
    console.log ('PIS/CONFIS:     R$', pis_confis.toFixed(2))
    console.log('Taxa iluminação: R$', taxa_iluminação.toFixed(2))
    console.log('')
    console.log('*************************************')
    console.log('TOTAL A SER PAGO: R$',talão.toFixed(2))
    console.log('*************************************')
}

main()