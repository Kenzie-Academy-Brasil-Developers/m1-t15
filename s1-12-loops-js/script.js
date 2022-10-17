//LOOPS

//while
//for

//inicialização => contador  = 0
//condicional => 0 < 10 
//incremento => contador++ 

//while => EQUANTO
//enquaneto(condicional == true)
//faça isso: {
    
//mostrar na tla
//}

//...

// function posts(){

//     return 1   
// }


// while(posts()){


// }

//VARIÁVEL DE CONTROLE
//let cont = 1

//LOOP(CONDICIONAL)
// while(cont <= 5){

//     console.log(cont)
//     cont++
// }


//PARA

//para(inicialização; condicional; incremento) Faça:{

//}


//DECREMENTANDO
// for(let cont = 50; cont >= 0; cont--){
//     console.log(cont)
// }

//INCREMENTANDO 
// for(let cont = 0; cont <= 50; cont++){
//     console.log(cont)
// }


//ENCONTRANDO NUMEROS PARES 
function numerosPares(){
    console.log("Inicio")
    for(let cont = 0; cont <= 20; cont++){

       if(cont % 2 == 0){
        console.log("Esse numero é par: "+ cont)
       }
        
    }

    console.log("Fim")
}
//numerosPares()

//ENCONTRANDO NUMEROS impares 
function numerosImapares(){
    console.log("Inicio")
    for(let cont = 0; cont <= 20; cont++){

       if(cont % 2 == 1){
        console.log("Esse numero é impar: "+ cont)
       }
        
    }

    console.log("Fim")
}
//numerosImapares()

//SOMAR NUMEROS
function somarNumeros(){
   
    let total = 0
    for(let cont = 0; cont <= 10; cont++){
        total += cont
    }
    console.log(total)
   
}
//somarNumeros()







// function listaNomes(){

//     let nomes  = ""

//     let contador  = 1
//     while(contador <= 10){
//         nomes += prompt("Digite um nome")+" "
        
//         contador++
//     }

//     console.log(nomes)
// }

// listaNomes()


//STRINGS

//            0123456 
let string = "Hudson Carolino"
console.log(string.length)

//função recebendo parametro string
function contarLetras(string){
    
    //declarando variavel para fazer a contagem de letras
    let contarLetra = 0

    //loop, para percorrer string
    for(let cont = 0; cont < string.length; cont++){
        
        // VERIFICAÇÃO DA LETRA 
        if(string[cont] == "o"){
            contarLetra++
        }
    }

    //resultado final
    console.log(contarLetra)

}

contarLetras(string)











