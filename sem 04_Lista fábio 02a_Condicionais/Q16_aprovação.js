const prompt = require ('prompt-sync')()

const nota1 = Number(prompt('Nota 1 : '))
const nota2 = Number(prompt('Nota 2: '))

const media1 = (nota2 + nota1) / 2

function main(){
    if(media1 >= 7){
        console.log('Aprovado por média')
    }else{
        const nota3 = Number(prompt('Nota Exame Final: '))
        
        const media2 = (media1 + nota3 ) / 2

        if(media2 >= 5){
            console.log('Aprovado no exame final')
        }else{
            console.log('reprovado')
        }
    }
}

main()