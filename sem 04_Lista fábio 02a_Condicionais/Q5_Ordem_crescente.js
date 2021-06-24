const prompt = require('prompt-sync')()

const n1 = Number(prompt('1º NÚMERO: '))
const n2 = Number(prompt('2º NÚMERO: '))
const n3 = Number(prompt('3º NÚMERO: '))

function main (){
    if (n1 > n2 && n2 > n3){
        console.log(n3, n2, n1)
    }else if (n1 >  n2 && n2 < n3){
        console.log(n2, n3, n1)
    }else if (n1 < n2 && n1 > n3){
        console.log(n3, n1, n2)
    }else if (n1 < n2 && n1 < n3){
        console.log(n1, n3, n2)
    }
}
main()
