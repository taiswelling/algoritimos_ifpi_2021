/*Leia valores inteiros em duas variáveis distintas e 
se o resto da divisão da primeira pela segunda for 1 escreva a soma dessas variáveis mais o resto da divisão;
se for 2 escreva se o primeiro e o segundo valor são pares ou ímpares;
se for igual a 3 multiplique a soma dos valores lidos pelo primeiro;
se for igual a 4 divida a soma dos números lidos pelo segundo, se este for diferente de zero.
Em qualquer outra situação
escreva o quadrado dos números lidos.*/

const input = require('prompt-sync')()

const numero1 = Number(input('Digite o primeiro valor inteiro: '))
const numero2= Number(input('Digite o segundo valor inteiro: '))

const resto_divisao = numero1 % numero2

const par1 = numero1 % 2
const par2 = numero2 % 2

const quadrado1 = numero1**2
const quadrado2 = numero2**2

function  main() {
    if (resto_divisao  === 1){
    console.log (numero1 + numero2 + resto_divisao)
    

    }else if (resto_divisao  === 2){
        if (par1 === 0){
            console.log(`${numero1} é par`)
        }else if (par1 !== 0){
            console.log (`${numero1} é ímpar`)
        }else if (par2 === 0){
            console.log(`${numero1} é par`)
        }else if (par2 !== 0){
            console.log (`${numero1} é ímpar`)
        }

    }else if (resto_divisao ===3 ){
        console.log((numero1 + numero2)* numero1)
    
    }if (resto_divisao === 4){
        if (numero2 !== 0){
            console.log ((numero1 + numero2)/numero2)
        }
    
    }else{
        console.log(`O quadrado dos numeros lidos são ${quadrado1} e ${quadrado2}, respectivamente`)
    }
}

main()