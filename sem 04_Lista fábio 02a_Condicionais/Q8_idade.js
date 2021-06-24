const prompt = require('prompt-sync')()

const adia = Number(prompt('Que dia é hoje?  '))
const ames = Number(prompt('Em que mês você está?  '))
const aano = Number(prompt('Em ano você está?  '))
const ndia = Number(prompt('Que dia você nasceu?  '))
const nmes = Number(prompt('Que mês você nasceu?  '))
const nano = Number(prompt('Que ano você nasceu?  '))

const anos = aano-nano
const anos1 = anos-1

console.log(`--------------------------------------`)
console.log(`Hoje é ${adia}/${ames}/${aano}`)
console.log(`Você nasceu em ${ndia}/${nmes}/${nano}`)
console.log(`---------------------------------------`)

function main(){
    if (ames>=nmes && adia>=ndia){
            console.log(`Você possui ${anos} anos`)
    }else{
        console.log(`Você possui ${anos1}`)
    }
}

main()