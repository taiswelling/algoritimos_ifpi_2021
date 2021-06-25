const prompt = require('prompt-sync')()

const letra = String(prompt('Digite uma letra: ')).toUpperCase()

function main(){
    if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U'){
        console.log('VOGAL')
    }else{
        console.log('CONSOANTE')
    }
}

main()