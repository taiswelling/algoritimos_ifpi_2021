const input = require (`prompt-sync`)()

const nota1 = Number(input(`Primeira nota: `))
const nota2 = Number(input(`Segunda nota: `))
const nota3 = Number(input(`Terceira nota: `))
const nota4 = Number(input(`Quarta nota: `))
const nota5 = Number(input(`Quinta nota: `))
const nota6 = Number(input(`Sexta nota: `))

const med1 = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6

function main(){

    if (nota1 < 0 || nota1 > 10){
        console.log(`ERRO!\nExtiste pelo menos uma nota inserida, inválida!\nTente novamente!`)
        
    }else if (nota2 < 0 || nota2 > 10){
        console.log(`ERRO!\nExtiste pelo menos uma nota inserida, inválida!\nTente novamente!`)

    }else if (nota3 < 0 || nota3 > 10 ){
        console.log(`ERRO!\nExtiste pelo menos uma nota inserida, inválida!\nTente novamente!`)

    }else if (nota4 < 0 || nota4 > 10){
        console.log(`ERRO!\nExtiste pelo menos uma nota inserida, inválida!\nTente novamente!`)

    }else if (nota5 < 0 || nota5 > 10){
        console.log(`ERRO!\nExtiste pelo menos uma nota inserida, inválida!\nTente novamente!`)

    }else if (nota6 < 0 || nota6 > 10){
        console.log(`ERRO!\nExtiste pelo menos uma nota inserida, inválida!\nTente novamente!`)


    }else if (med1 >= 9 && med1 <= 10){
        const conceito = 'A'
        const situacao = 'APROVADO'
        console.log(`__________________________________________`)
        console.log(`|notas |  média |  conceito |   situação   |`)
        console.log(`__________________________________________`)
        console.log(`| ${nota1}  |       |            |              |`) 
        console.log(`| ${nota2}  |       |            |              |`)
        console.log(`| ${nota3}  |${med1.toFixed(2)}  |     ${conceito}      |  ${situacao}    |`)
        console.log(`| ${nota4}  |       |            |              |`)
        console.log(`| ${nota5}  |       |            |              |`)
        console.log(`| ${nota6}  |       |            |              |`)
        console.log(`__________________________________________`)


    }else if (med1 >= 7.5 && med1 < 9){
        conceito='B'
        situacao='APROVADO'
        console.log(`__________________________________________`)
        console.log(`|notas |  média |  conceito |   situação   |`)
        console.log(`__________________________________________`)
        console.log(`| ${nota1}  |       |            |              |`) 
        console.log(`| ${nota2}  |       |            |              |`)
        console.log(`| ${nota3}  |  ${med1.toFixed(2)} |    ${conceito}       |   ${situacao}   |`)
        console.log(`| ${nota4}  |       |            |              |`)
        console.log(`| ${nota5}  |       |            |              |`)
        console.log(`| ${nota6}  |       |            |              |`)
        console.log(`__________________________________________`)


    }else if ( med1 >= 6 && med1 < 7.5){
        conceito = 'C'
        situacao = 'APROVADO'
        console.log(`__________________________________________`)
        console.log(`|notas |  média |  conceito |   situação   |`)
        console.log(`__________________________________________`)
        console.log(`| ${nota1}  |       |            |              |`) 
        console.log(`| ${nota2}  |       |            |              |`)
        console.log(`| ${nota3}  |  ${med1.toFixed(2)} |     ${conceito}      |   ${situacao}   |`)
        console.log(`| ${nota4}  |       |            |              |`)
        console.log(`| ${nota5}  |       |            |              |`)
        console.log(`| ${nota6}  |       |            |              |`)
        console.log(`__________________________________________`)


    }else if (med1 >= 4 && med1 < 6){
        const conceito = 'D'
        const situacao = 'REPROVADO'
        console.log(`__________________________________________`)
        console.log(`|notas |  média |  conceito |   situação   |`)
        console.log(`__________________________________________`)
        console.log(`| ${nota1}  |       |            |              |`) 
        console.log(`| ${nota2}  |       |            |              |`)
        console.log(`| ${nota3}  |  ${med1.toFixed(2)} |      ${conceito}     |   ${situacao}  |`)
        console.log(`| ${nota4}  |       |            |              |`)
        console.log(`| ${nota5}  |       |            |              |`)
        console.log(`| ${nota6}  |       |            |              |`)
        console.log(`__________________________________________`)


    }else if (med1 >= 0 && med1 <4){
        const conceito='E'
        const situacao='REPROVADO'
        console.log(`__________________________________________`)
        console.log(`|notas |  média |  conceito |   situação   |`)
        console.log(`_________________________________________`)
        console.log(`| ${nota1}  |       |            |              |`) 
        console.log(`| ${nota2}  |       |            |              |`)
        console.log(`| ${nota3}  |  ${med1.toFixed(2)} |      ${conceito}     |   ${situacao}  |`)
        console.log(`| ${nota4}  |       |            |              |`)
        console.log(`| ${nota5}  |       |            |              |`)
        console.log(`| ${nota6}  |       |            |              |`)
        console.log(`__________________________________________`)
    }
}

main ()
