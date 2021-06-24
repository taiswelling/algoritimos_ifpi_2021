const prompt = require ('prompt-sync')()

const n1 = Number(prompt('N1: '))
const n2 = Number(prompt('N2: '))
const n3 = Number(prompt('N3: '))
const n4 = Number(prompt('N4: '))
const n5 = Number(prompt('N5: '))

function media(){
    const media = (n1 + n2 + n3 + n4 + n5)/5
    return media
}

console.log('Os valores digitados que são maiores que a média: ')

function main(){
    if (n1 > media()){
        console.log(n1)
    }
    if (n2 > media()){
        console.log(n2)
    }
    if (n3 > media()){
        console.log(n3)
    }
    if (n4 > media()){
        console.log(n4)
    }
    if (n5 > media()){
        console.log(n5)
    }
}

main()