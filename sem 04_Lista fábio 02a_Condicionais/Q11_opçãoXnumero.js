const prompt = require('prompt-sync')()

const opcao = Number(prompt('OPÇÃO: '))
const n1 = Number(prompt('N1: '))
const n2 = Number(prompt('N2: '))
const n3 = Number(prompt('N3: '))

function main(){
    if (opcao === n1){
        console.log(`Opção = N1 = ${n1}`)
    }if (opcao === n2){
        console.log((`Opção = N2 = ${n2}`))
    }if (opcao === n3){
        console.log((`Opção = N3 = ${n3}`))
    }else{
        console.log('Nenhum dos valores digitados é correspondente.')
    }
}

main()