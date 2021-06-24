const input = require ('prompt-sync')()
    
const angulo = Number(input('Digite um ângulo inteiro entre 0 e 360°:'))
   
function main(){
    if (angulo >= 0 && angulo <= 90){
        console.log('O ângulo digitado pertence ao primeiro quadrante;')
    
    }else if (angulo >= 91 && angulo <= 180){
        console.log('O ângulo digitado pertence ao segundo quadrante;')
    
    }else if (angulo >= 181 && angulo <=270){
        console.log('O ângulo digitado pertence ao terceiro quadrante;')
    
    }else if (angulo >= 271 && angulo <=360){
        console.log('O ângulo digitado pertence ao quarto quadrante;')
    
    }else{
        console.log('O ângulo digitado não é válido')
    }
}
main()