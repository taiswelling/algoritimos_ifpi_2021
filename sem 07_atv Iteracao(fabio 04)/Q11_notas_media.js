const prompt = require('prompt-sync')()

var n_alunos = 0
var n_aprovados = 0
var n_reprovados = 0

function main (){
    while (!( matricula === 0)){
        var matricula = Number(prompt('MATRICULA: '))

        if (matricula === 0){
            break
        }

        var nota1 = Number(prompt('NOTA 1: '))
        var nota2 = Number(prompt('NOTA 2: '))
        var nota3 = Number(prompt('NOTA 3: '))
        var media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10

        console.log (`A média do aluno de matrícula ${matricula}: ${media}`)
        if (media >= 7){
            console.log('APROVADO')
            n_aprovados ++
        }else{
            console.log('REPROVADO')
            n_reprovados ++
        }

        n_alunos ++
    }
}
main()

console.log (`A turma possui ${n_alunos} alunos.`)
console.log (`${n_aprovados} foram aprovados`)
console.log (`${n_reprovados} foram reprovados`)