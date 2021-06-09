const prompt = require('prompt-sync')()

function media_ponderada(nota1, nota2, atividades){
    return ((nota1*3) + (nota2*2) + (atividades*1))/ (3+2+1)
}

function main(){
    const nota1 = Number(prompt ('Primeira nota: '))
    const nota2 = Number(prompt ('Segunda nota: '))
    const atividades = Number (prompt ('Nota das atividades: '))

    const media = media_ponderada(nota1, nota2, atividades)

    if (media >= 7){
        console.log(`Parabéns! Sua média ficou ${media.toFixed(2)} e você foi APROVADO POR MÉDIA`)
    }else if (media < 4){
        console.log (`Sua média ficou ${media.toFixed(2)} e você foi REPROVADO`)
    }else if (media >= 4 && media <7){
        console.log (`Sua média ficou ${media.toFixed(2)} e você está de PROVA FINAL.`)
        
        console.log('')
        console.log('****************************')
        const nota_prova_final = Number(prompt('Nota da Avaliação final: '))
        console.log('****************************')

        const media_final = (media_ponderada(nota1, nota2, atividades) + nota_prova_final)/2
        if (media_final >= 6){
            console.log (`Sua média ficou ${media_final.toFixed(2)} e ocê foi APROVADO NA PROVA FINAL` )
        }if (media_final < 6){
            console.log(`Sua média ficou ${media_final.toFixed(2)} e Você foi REROVADO NA PROVA FINAL` )
        }
    }
}

main()
