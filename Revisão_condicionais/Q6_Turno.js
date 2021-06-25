const input = require ('prompt-sync')()

const turno = String(input(`Em que turno você estuda? Digite "M" para o turno manhã; Digite "T" para o turno da tarde; Digite "N" para o turno manhã: `)).toUpperCase()
const nome = String(input('Qual seu nome?'))

function main(){
    if (turno ==='M'){
        console.log(`Bom dia, ${nome}!`)
        
    }else if (turno=='T'){
        console.log(`Boa tarde, ${nome}!`)

    }else if (turno=='N'){
        console.log(`Boa noite, ${nome}!`)

    }else{
        console.log('Erro! Observe o valor digitado e tente novamente!\n(OBS){ Os valores válidos para o turno são apenas "M,T ou N")' )
    }
}
main()