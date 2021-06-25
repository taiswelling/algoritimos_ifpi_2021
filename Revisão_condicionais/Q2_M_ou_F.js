const prompt = require('prompt-sync')()

const sexo = String(prompt('Digite um valor(F ou M): ')).toUpperCase()

function main(){
    if (sexo === 'M'){
        console.log('MASCULINO')
    }else if (sexo === 'F'){
        console.log('FEMININO')
    }else{
        console.log('INVÁLIDO')
    }
}
main()