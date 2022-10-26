// 0 Água/nada
// 1 Navio

// let mapaNavios = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
// ]

let mapaNavios = []
let mapaJogador = []
let naviosRestantes = 0
let numJogadas = 0

function iniciarJogo(tamanho, quantidadeNavios){
    //Limpando o console
    console.clear()

    //Verificar se quantidade de casa é maior que a quantidade de navios que quer adicionar
    if(quantidadeNavios > tamanho * tamanho){
        return "Quantidade de navios maior que a quantidade de casas disponíveis"
    }
    else{

        //Resetando as variaveis pra iniciar um novo jogo
        mapaNavios = []
        mapaJogador = []
        numJogadas = 0
        naviosRestantes = quantidadeNavios

        //Populando os arrays aninhados com 0
        for(let i = 0; i < tamanho; i++){
            let linhaNavios = []
            let linhaJogador = []
            for(let j = 0; j < tamanho; j++){
                linhaNavios.push(0)
                linhaJogador.push(0)
            }
            mapaJogador.push(linhaJogador)
            mapaNavios.push(linhaNavios)
        }

        //Adicionando os navios
        for(let i = 0; i < quantidadeNavios; i++){
            let navioAdicionado = false

            //Verificando se o navio conseguiu ser adicionado em um espaço que não tem navio
            while(navioAdicionado == false){
                let coluna = Math.floor(Math.random() * tamanho)
                let linha = Math.floor(Math.random() * tamanho)
                
                if(mapaNavios[linha][coluna] == 0){
                    mapaNavios[linha][coluna] = 1
                    navioAdicionado = true
                }
            }
        }

        //Mostrando mapa do jogador
        console.table(mapaJogador)
    }
}

function jogar(linha, coluna){
    //Limpando o console
    console.clear()

    //Verificando se o jogador passou linha e coluna que existe no mapa
    if(mapaNavios[linha] == undefined || mapaNavios[linha][coluna] == undefined){
        return "Valor invalido!"
    }
    else{

        //Verificando se o jogador acertou um navio e mudando os valores da variaveis
        if(mapaNavios[linha][coluna] == 1){
            mapaJogador[linha][coluna] = "X"
            mapaNavios[linha][coluna] = 0
            naviosRestantes--
            console.log("Navio atingido!")
        }
        //Mudando o mapa do jogador caso ele tenha errado
        else{
            mapaJogador[linha][coluna] = "-"
            console.log("Água!")
        }

        //Mostrando mapa do jogador
        console.table(mapaJogador)

        //Incrementando a variavel de contar jogadas e mostrando ela
        numJogadas++
        console.log(`Quantidade de jogadas: ${numJogadas}`)

        //Verificando se o jogador ganhou destruindo todos navios
        if(naviosRestantes == 0){
            return "Parabéns!! Você ganhou!"
        }
        //Caso não tenha ganhado, mostranodo a quantidade de navios restantes
        else{
            return `Navios restantes: ${naviosRestantes}`
        }
    }
}