const prompt = require ('prompt-sync')()

var quantidade_inicial = Number (prompt('Quantos numeros deseja digitar: '))
var soma = 0
var quantidade = quantidade_inicial
var lista = []
var negativo = 0
var positivo = 0


while (quantidade > 0 ){
    var numero = Number(prompt('Digite um valor: '))
    soma = soma + numero
    quantidade = quantidade - 1
    lista.push(numero)
    
    if (numero < 0){
        negativo = Number(negativo + 1)
    }
    if (numero > 0){
        positivo = Number (positivo + 1)
    }
}

function media_dos_valores(){
    const media =(soma / quantidade_inicial)
    return media
    
}

function menor_valor(){
    const lista_em_ordem = lista.sort(function(a,b){ 
        if(a > b) return 1
        if(a < b) return -1
        return 0
    })
    return lista_em_ordem[0]
    
}

function maior_valor(){
    const lista_em_ordem = lista.sort(function(a,b){ 
        if(a > b) return 1
        if(a < b) return -1
        return 0
    })
    return lista_em_ordem[lista_em_ordem.length - 1]
}

function negativos(){
    return negativo
}

function positivos(){
    return positivo
}

module.exports = {
    media_dos_valores, menor_valor, maior_valor, negativos, positivos
}