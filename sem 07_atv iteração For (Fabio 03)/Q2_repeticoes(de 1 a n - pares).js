const input = require('prompt-sync')()

var num = Number(input('Digite um valor: '))
var a = 2

resto=num%2

for (a; a <= num;){
    if (resto==0){
        console.log(a)
        a+=2
    }
    if (resto !== 0){
        while (a<num){
            print(a)
            a+=2
        }
    }
}