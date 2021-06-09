const prompt = require('prompt-sync')()

function faixa_score1(valor1){
    if (0 > valor1 <= 400){
        return "BAIXO"
    }else if (400 > valor1 <= 600){
        return "REGULAR"
    }else if (600 > valor1 <= 800){
        return "BOM"
    }else if (800 > valor1 <= 1000){
        return "ÓTIMO"
    }  
}

function faixa_score2(valor2){
    if (0 > valor2 <= 300){
        return "BAIXO"
    }else if (300 > valor2 <= 500){
        return "REGULAR"
    }else if (500 > valor2 <= 700){
        return "BOM"
    }else if (700 > valor2 <= 1000){
        return "ÓTIMO"
    }
}

function calculo_score(){
    const a = Number (prompt('Score(0 a 1000): '))
    const b = Number (prompt('Score(0 a 1000): '))
    const c = Number (prompt('Score(0 a 1000): '))

    const valor1 = ((a * 0.26) + (b * 0.57) + (c * 0.17))
    const valor2 = ((a * 0.62) + (b * 0.19) + (c * 0.19))
    const categoria1 = faixa_score1(valor1)
    const categoria2 = faixa_score2(valor2)

    console.log(`Score 1.0: ${valor1} - ${categoria1}`)
    console.log(`Score 2.0: ${valor2} - ${categoria2}`)
}

calculo_score()