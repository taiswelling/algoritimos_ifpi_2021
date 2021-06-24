const input = require('prompt-sync')()

const senha = Number(input('Digite uma senha de 4 dígitos:'))

function main(){
    if (senha === 1234){
        console.log('_________________')
        console.log('Acesso liberado!')
        console.log('_________________')

    }else{
        console.log('XXXXXXXXXXXXXXXX')
        console.log(' Acesso negado!')
        console.log('XXXXXXXXXXXXXXXX')
    }
}

main()