function criarFilmes(lista){
    let divListaFilmes = document.querySelector(".lista-filmes")

    for(let i = 0; i < lista.length; i++){
        let filme = lista[i]

        let divFilme = document.createElement("div")
        divFilme.classList.add("filme")
        
        let img =  document.createElement("img")
        img.src = filme.imagem
        img.alt = filme.titulo
        img.classList.add("capa")
        divFilme.appendChild(img)

        let divDadosFilme = document.createElement("div")

        let divFilmeHeader = document.createElement("div")
        divFilmeHeader.classList.add("filme-header")

        let h2TituloFilme = document.createElement("h2")
        h2TituloFilme.innerText = filme.titulo
        divFilmeHeader.appendChild(h2TituloFilme)

        let h2AvaliacaoFilme = document.createElement("h2")
        h2AvaliacaoFilme.innerText = filme.avaliacao.toFixed(1)
        divFilmeHeader.appendChild(h2AvaliacaoFilme)

        divDadosFilme.appendChild(divFilmeHeader)

        let pInfos = document.createElement("p")
        pInfos.innerText = `${filme.anoLancamento} - ${filme.duracao} - Instrutor: ${filme.instrutor}`
        pInfos.classList.add("infos")
        divDadosFilme.appendChild(pInfos)

        let pSinopse = document.createElement("p")
        pSinopse.innerText = filme.sinopse
        pSinopse.classList.add("sinopse")
        divDadosFilme.appendChild(pSinopse)

        let ulCategorias = document.createElement("ul")
        ulCategorias.classList.add("categorias")

        for(let j = 0; j < filme.categorias.length; j++){
            let categoria = filme.categorias[j]

            let liCategoria = document.createElement("li")
            liCategoria.innerText = categoria
            ulCategorias.appendChild(liCategoria)
        }

        divDadosFilme.appendChild(ulCategorias)

        divFilme.appendChild(divDadosFilme)

        divListaFilmes.appendChild(divFilme)
    }
}

criarFilmes(filmes)