const prompt = require ('prompt-sync')()

function main(){
    const horario = String(prompt('Informe o horario (formato hh:mm:ss): ')).split(':')

    console.log (`${horario[0]} hora(s) , ${horario[1]} minuto(s) e ${horario[2]} segundos(s);`)
}

main()