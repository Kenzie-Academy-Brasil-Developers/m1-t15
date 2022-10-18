//LOOPS

//while
//for




// function retornaNumero(numero){
//     let cont = 0

//     while(cont <= 10){

//         if(cont == numero){
//             return cont
//         }
        
//         cont++
//     }
// }


// function retornaNumero(numero){
   
//     for(let cont = 0; cont <= 50; cont++){

//        console.log(cont)

//     }
// }

//retornaNumero()

// let contador = 0
// console.log(contador)

// contador = contador + 1
// console.log(contador)

// contador = contador + 1
// console.log(contador)

// contador = contador + 1
// console.log(contador)


         // 012345
let nome = "Hudson"

//ESCREVA UMA FUNÇÃO QUE RECEBA COMO PARAMETRO UMA STRING
//PESQUISE DETERMINADA LETRA, E RETORNE EM CAIXA ALTA


function retornarLetra(string, pesquisa){
    
    //PERCORRENDO STRING
    for(let i = 0; i<string.length; i++){
        
        //FAZENDO VERIFICAÇÃO DA LETRA
        if(string[i] == pesquisa){

            //RETORNANDO A LETRA/ENCERRA A FUNÇÃO
            return string[i].toUpperCase()
        }
    }

    //CASO NÃO ENCONTRE RETORNAR MENSAGEM
    return "Não foi encontrado"
}

//CHAMADA DA FUNÇÃO, PASSANDO OS ARGUMENTOS NECESSÁRIOS (STRIING, PESQUISA)
let retornoPesquisa = retornarLetra("Hudson", "n")

//console.log(retornoPesquisa)


//ESCREVA UMA FUNÇÃO QUE RETORNE UMA (NOVA STRING), COM TODAS AS LETRAS EM MAIUSCULO
//012345
//HUDSON
function convertendoString(string){

    let novaString = ""

    for(let i = 0; i<string.length; i++){
        novaString += string[i].toUpperCase()
    }

    return novaString

}
let stringConvertida = convertendoString("Hudson")

console.log(stringConvertida)

//ESCREVA UMA FUNÇÃO QUE RETORNE UM STRING INVERTIDA
//NOSDUH


//012345
//HUDSON
function invertendoString(string){

    let novaStringInvertida = ""

    for(let i = string.length; i > 0; i--){
        console.log(string[i])
    }

} 
//invertendoString("HUDSON")




function numeroPar(numero){
    
    if(numero % 2 == 0){
        return true
    }
   
}


function recuperarNUmeroUsusario(){

    let numeroUsuario = prompt("Digite um numero")


    if(numeroUsuario !== ""){


        if(numeroPar(numeroUsuario)){
            alert("Esse numero par")
        }else{
            alert("Esse numero impar")
        }

    }

}




// function contarLetra(string, letra){
//     let contadorLetra = 0 
//     for(){

//         if(string[i] == letra){
//             contadorLetra++
//         }
//     }

//     return contadorLetra

// }

// function retornarPosicaoLetra(string, letra){

//     for(){

//         if(string[i] == letra){
//             return i
//         }
//     }
// }


























