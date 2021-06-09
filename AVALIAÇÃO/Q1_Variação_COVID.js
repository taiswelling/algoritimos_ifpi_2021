const prompt = require ('prompt-sync')()

function diferença_entre_medias(media_hoje, media_14_dias){
    return media_hoje-media_14_dias
}

function main(){
    const media_14_dias = Number(prompt('Informe a média de casos nos últimos 14 dias (%): '))
    const media_hoje = Number(prompt('Informe a média de casos de hoje (%): '))

    const diferença = diferença_entre_medias(media_hoje, media_14_dias)

    if (media_hoje > media_14_dias &&  diferença > 15){
        console.log('Os casos de COVID estão em  alta')
    }else if(media_hoje < media_14_dias && diferença < -15){
        console.log('Os casos de COVID estão em queda')
    }else if(diferença <= 15 && diferença >= -15){
        console.log('Os casos de COVID estão em estabilidade')
    }
}

main()
