const prompt = require ('prompt-sync')()

const dia = Number (prompt('Dia: '))
const mes = Number (prompt('Mes: '))
const ano = Number (prompt('ano: '))

function main(){
    if (mes>12 || mes <1){
        console.log(`A data ${dia}/${mes}/${ano}/ é inválida`)

    }else{
        if (mes === 1 ||mes === 3 ||mes === 5 ||mes === 7 ||mes === 8 ||mes === 10 ||mes === 12){
            if (dia >= 1 && dia <= 31){
                console.log(`A data ${dia}/${mes}/${ano} é válida`)
            }else {
                console.log(`A data ${dia}/${mes}/${ano} é inválida`)
            }  

        }else if (mes === 4 ||mes === 6 ||mes === 9 ||mes === 11){
            if (dia >=1 && dia <= 30){
                console.log(`A data ${dia}/${mes}/${ano} é válida`)
            }else{
                console.log(`A data ${dia}/${mes}/${ano} é inválida`)
            }
        
        }else if (mes === 2){
            if (dia <= 1 && dia <=28){
                console.log(`A data ${dia}/${mes}/${ano} é válida`)
            }else{
                console.log(`A data ${dia}/${mes}/${ano} é inválida`)
            }
        }
    }
}

main()