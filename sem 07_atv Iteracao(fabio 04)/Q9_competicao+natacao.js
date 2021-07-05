const prompt = require('prompt-sync')()

var n_provas = Number(prompt('Numero da prova: '))
var q_nadadores = Number(prompt('Quantidade de nadadores: '))

var pontos_a = 0
var pontos_b = 0

while (q_nadadores > 0){

    var nome_nadador = String(prompt(`nome do nadador ${q_nadadores}: `))
    var classificação = Number(prompt('Classificação: '))
    var tempo = Number(prompt('Tempo: '))
    var club = String(prompt('Club: ')).toUpperCase()

    if (club === 'A'){
        if (classificação === 1){
            pontos_a = pontos_a + 9
        }else if (classificação === 2){
            pontos_a = pontos_a + 6
        }else if (classificação === 3){
            pontos_a = pontos_a + 4
        }else if (classificação === 4){
            pontos_a = pontos_a + 3
        }
    }
    
    if (club === 'B'){
        if (classificação === 1){
            pontos_b = pontos_b + 9
        }else if (classificação === 2){
            pontos_b = pontos_b + 6
        }else if (classificação === 3){
            pontos_b = pontos_b + 4
        }else if (classificação === 4){
            pontos_b = pontos_b + 3
        }
    }
    q_nadadores = q_nadadores - 1


}

if (pontos_a > pontos_a){
    console.log(`O club "A" venceu, com ${pontos_a}. Enquanto o club "B" possui ${pontos_b}`)
}else{
    console.log(`O club "B" venceu, com ${pontos_b}. Enquanto o club "A" possui ${pontos_a}`)
}