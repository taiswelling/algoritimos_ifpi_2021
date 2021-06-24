const prompt = require ('prompt-sync')()

const horas_professor1 = Number(prompt('Quantidades de horas(professor 1): '))
const valor_hora_professor1 = Number(prompt('Valor por hora/aula (professor 1): '))
const horas_professor2 = Number(prompt('Quantidades de horas(professor 2): '))
const valor_hora_professor2 = Number(prompt('Valor por hora/aula (professor 2): '))

const salario_professor1 = horas_professor1 * valor_hora_professor1
const salario_professor2 = horas_professor2 * valor_hora_professor2

function main(){
    if (salario_professor1 > salario_professor2){
        console.log(`O Professor 1 tem o salário maior que o professor 2`)
    }
    if (salario_professor2 > salario_professor1){
        console.log(`O Professor 2 tem o salário maior que o professor 1`)
    }
}

main()