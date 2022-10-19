//let nomes = ["Daneil", "Gabriel", "Anderson", "Hudson"]

//let numeros = [1,2,234,23,435,3465,3,4,5,6223,-1,23]

//let misto  = ["Hudson", 242, false, true, [], "2453", function(){}]


//ACESSAR VALORES
//console.log(nomes[0])

//EDTIAR VALORES
//nomes[2] = "Ugo"


//ADICIONAR VALORES
//nomes[4] = "Maria"

//nomes.push("Lucas", "Eduardo")

//console.table(nomes)


//EXEMPLOS
//              0         1          2            3
let nomes = ["Daniel", "Gabriel", "Anderson", "Hudson"]
//console.log(nomes)
//FUNÇÃO LISTAR NOMES
function listarNomes(lista){
    
    //PERCORRENDO A LISTA
    for(let i = 0; i < lista.length; i++){

        //ACESSANDO VALORES
        console.log(`${i+1}) Nome: ${lista[i]}`)

    }

}
//listarNomes(nomes)


//PESQUISAR NOME 
function pesquisarNomeIdenx(n, lista){

   for(let i = 0; i < lista.length; i++){

    //ACESSANDO UM NOME
    let nome = lista[i]
    
    if(n == i){
        return nome
    }
    
   }

   return "Nome não encontrado"
}   

let resultadoPesquisa = pesquisarNomeIdenx(10, nomes)
//console.log(resultadoPesquisa)


//NUMEROS 
let numeros = [1,22,343,54,53,23,54,456,77,8,99,3,1,2]

//FUNÇÃO QUE RETORNA UMA NOVA LISTA COM TODOS OS NUMEROS PARES 
function numerosPares(lista){
    
    //1) DECLARANDO LISTA PARA RECEBER NUMEROS PARES
    let numerosPares = []

    //2) PERCORRENDO A LISTA DE NUMEROS
    for(let i = 0; i<lista.length; i++){

        //3) ACESSANDO CADA UM DOS NUMEROS
        let numeroAtual = lista[i]
        
        //4) REALIZANDO TESTE SE O NUMERO É PAR
        if(numeroAtual % 2 == 0){

            //5) ALIMENTANDO A MINHA LISTA
            numerosPares.push(numeroAtual)
        }
    }

    //6) RETORNANDO LISTA COM TODOS OS NUMEROS PARES
    return numerosPares

}
//let listaNumerosPares = numerosPares(numeros)
//console.log(listaNumerosPares)


// let listaAmigos  = []

// let cont = 0
// while(cont <= 5){
    
//     let nome  = prompt("Digite um nome")
    
//     listaAmigos.push(nome)
    
//     cont++
// }


let hudson = "Hudson Carolino"

//                0          1          2     3
let novoArray = ["Hudson", "Eduardo", "Ugo", hudson] 
//     length        1           2        3

console.log(novoArray)
for(let i = 0; i < novoArray.length; i++){

    console.log(novoArray[i])
   
}   

