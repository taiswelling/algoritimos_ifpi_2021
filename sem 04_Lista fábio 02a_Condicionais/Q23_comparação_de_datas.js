const input = require ('prompt-sync')()

console.log('INSIRA DUAS DATAS(DIA, MÊS E ANO):')
const dia1 = Number(input('Dia da primeira data:'))
const mes1 = Number(input('Mês da primeira data(em valor numérico):'))
const ano1 = Number(input('Ano da primeira data:'))

const dia2 = Number(input('Dia da segunda data:'))
const mes2 = Number(input('Mês da segunda data(em valor numérico):'))
const ano2 = Number(input('Ano da segunda data:'))

console.log(`As datas inseridas foram ${dia1}/${mes1}/${ano1} e ${dia2}/${mes2}/${ano2}, respectivamente`)

function main(){
// VERIFICANDO A VALIDADE DO DIA INSERIDO:
    if (mes1 > 12 || mes2 > 12){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 1 && (dia1 || dia2) > 31){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 2 && (dia1 || dia2)>28){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 3 && (dia1 || dia2)>31){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 4 && (dia1 || dia2)>30){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 5 && (dia1 || dia2)>31){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 6 && (dia1 || dia2)>30){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 7 && (dia1 || dia2)>31){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 8 && (dia1 || dia2)>31){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 9 && (dia1 || dia2)>30){
        console.log ('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 10 && (dia1 || dia2)>31){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 11 && (dia1 || dia2)>30){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

    }else if ((mes1 || mes2) === 12 && (dia1 || dia2)>31){
        console.log('Uma ou ambas as datas inseridas são inválidas;')

//VERIFICNADO QUAL DATA É MAIS RECENTE
    }else if (ano1 > ano2){
        console.log('A primeira data inserida é mais recente que a segunda data;')

    }else if (ano1 === ano2 && mes1 > mes2){
        console.log('A primeira data inserida é mais recente que a segunda data;')

    }else if (ano1 === ano2 && mes1 === mes2 && dia1 > dia2){
        console.log('A primeira data inserida é mais recente que a segunda data;')

    }else if (ano1 === ano2 && mes1 === mes2 && dia1 === dia2){
        console.log('As datas inseridas são iguais;')

    }else{
        console.log('A segunda data inserida é mais recente que a primeira data;')
    }
}

main()