const input = require(`prompt-sync`)()

const num = Number(input(`Digite um número entre zero e 1000:`))

const centena = Math.trunc(num / 100)
const rest1 = num % 100
const dezena = Math.trunc(rest1/10)
const unidade = rest1 % 10

function main(){
    if (num < 0 || num > 1000){
        console.log(`ERRO!Você digitou um valor inválido!Tente novamente!`)

    }else if(num  === 1000){
        console.log(`1000 = 10 centenas,0 dezena e 0 unidadedade.`)

    }else if(num >= 0 && num <= 99){
        console.log(` ${num} =  ${dezena} dezena(s) e ${unidade} unidadedade(s)`)

    }else if(num<1000 && num >=100){
        console.log(`${num} = ${centena} centena(s), ${dezena} dezena(s) e ${unidade} unidadedade(s)`)
    }
}
main()