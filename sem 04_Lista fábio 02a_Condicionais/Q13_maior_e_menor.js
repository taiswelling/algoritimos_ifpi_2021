const prompt = require ('prompt-sync')()

const n1 = Number(prompt('N1: '))
const n2 = Number(prompt('N2: '))
const n3 = Number(prompt('N3: '))
const n4 = Number(prompt('N4: '))
const n5 = Number(prompt('N5: '))

function main(){
    const lista = [(Number (n1)), ,(Number (n2)),(Number (n3)),(Number (n4)),(Number (n5))];
    
    const lista_em_ordem = lista.sort(function(a,b){ //parte retirada de https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
        if(a > b) return 1
        if(a < b) return -1
        return 0
    })

    console.log(`O menor múmero é ${lista_em_ordem[0]}`)
    console.log(`O maior múmero é ${lista_em_ordem[4]}`)
}

main()
