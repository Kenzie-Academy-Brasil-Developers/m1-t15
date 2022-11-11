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
let naviosRestantes = 0
let numJogadas = 0

let divMapa = document.querySelector(".mapa")

let h1NumJogadas = document.querySelector("#numero-jogadas")
let h1NaviosRestantes = document.querySelector("#navios-restantes")

let botaoIniciar = document.querySelector(".iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

let h1Ganhou = document.querySelector(".ganhou")

function iniciarJogo(){

    let tamanho = parseInt(prompt("Tamanho do mapa:"))
    let quantidadeNavios = parseInt(prompt("Quantidade de navios:"))

    //Verificar se quantidade de casa é maior que a quantidade de navios que quer adicionar
    if(quantidadeNavios > tamanho * tamanho){
        return "Quantidade de navios maior que a quantidade de casas disponíveis"
    }
    else{

        //Resetando as variaveis pra iniciar um novo jogo
        mapaNavios = []
        numJogadas = 0
        naviosRestantes = quantidadeNavios

        divMapa.innerHTML = ""
        h1NaviosRestantes.innerText = `Navios restantes: ${naviosRestantes}`
        h1NumJogadas.innerText = `Número de jogadas: ${numJogadas}`

        h1Ganhou.classList.remove("ganhou-aparecer")

        //Populando os arrays aninhados com 0
        for(let i = 0; i < tamanho; i++){
            let linhaNavios = []

            let linhaMapa = document.createElement("ul")
            linhaMapa.classList.add("linha")

            for(let j = 0; j < tamanho; j++){
                linhaNavios.push(0)

                //Criando os li
                let casa = document.createElement("li")
                casa.classList.add("casa", "agua")
                //Adicionando o id na li usando o I e J para guardas as posicoes
                casa.id = i.toString() + "-" + j.toString()

                casa.addEventListener("click", escolherCasa)

                linhaMapa.appendChild(casa)
            }
            mapaNavios.push(linhaNavios)

            divMapa.appendChild(linhaMapa)
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
    }
}

function escolherCasa(e){
    if(naviosRestantes > 0){
        //Usando o e.target pra pegar a casa e as posicoes
        let casa = e.target
    
        let posicoes = casa.id.split("-")
    
        let linha = posicoes[0]
        let coluna = posicoes[1]
    
        //Comparar se acertou
        if(mapaNavios[linha][coluna] == 1){
            naviosRestantes--
            mapaNavios[linha][coluna] = 0
            
            //Trocando as classes da casa
            casa.classList.remove("agua")
            casa.classList.add("acertou")
            
            h1NaviosRestantes.innerText = `Navios restantes: ${naviosRestantes}`
        }
        else{
            //Trocando as classes da casa
            casa.classList.remove("agua")
            casa.classList.add("errou")
        }

        numJogadas++
        h1NumJogadas.innerText = `Números de jogadas: ${numJogadas}`

        if(naviosRestantes == 0){
            h1Ganhou.classList.add("ganhou-aparecer")
        }
    }
}