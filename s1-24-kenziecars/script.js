let carros = [
    {
        id: 1,
        modelo: 'Supra',
        ano: 1998,
        marca: 'Toyota',
        imagem: './img/supra.jpg',
    },
    {
        id: 2,
        modelo: 'Skyline',
        ano: 1997,
        marca: 'Nissan',
        imagem: './img/skyline.webp'
    },
    {
        id: 3,
        modelo: 'RX7',
        ano: 1999,
        marca: 'Mazda',
        imagem: './img/rx7.jpg'
    },
    {
        id: 4,
        modelo: 'Impreza',
        ano: 1996,
        marca: 'Subaru',
        imagem: './img/impreza.jpg'
    },
    {
        id: 5,
        modelo: 'Lancer',
        ano: 2008,
        marca: 'Mitsubish',
        imagem: './img/lancer.webp'
    },
    {
        id: 6,
        modelo: 'NSX',
        ano: 1991,
        marca: 'Acura',
        imagem: './img/nsx.jpg',
    },
    {
        id: 7,
        modelo: 'Civic',
        ano: 1998,
        marca: 'Honda',
        imagem: './img/civic.jpg',
    }
];

let favCount = 0;
let botoesProduto = document.querySelectorAll('.productButton');

for(let i = 0 ; i<botoesProduto.length; i++){
    let botao = botoesProduto[i];

    botao.addEventListener('click', function(e){
        let idElemento = e.target.id;
        let id = parseInt(idElemento.substring(4));
        if(!verificaFavorito(id)){ 
            favCount++;
            document.querySelector('#favQuantidade').innerHTML = `(${favCount})`;
            
            let carro = procuraCarro(id);
            
            let elementoCarro = criarCardFavorito(carro);

            let listaFavoritos = document.querySelector('#listaFavoritos');

            listaFavoritos.appendChild(elementoCarro);
        }
    })  
}

function verificaFavorito(id){
    let elem = document.querySelector('#f_'+id);
    if(elem == null){
        return false;
    }else{
        return true;
    }
}


function procuraCarro(id){
    for(let i = 0; i<carros.length ; i++){
        let carro = carros[i];
        if(carro.id == id){
            return carro;
        }
    }
    return 'Carro não encontrado';
}

function criarCardFavorito(carro){
    let li = document.createElement('li');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let button = document.createElement('button');

    li.id = 'f_' + carro.id;
    img.src = carro.imagem;
    p.innerHTML = `${carro.marca} ${carro.modelo} ${carro.ano}`;
    button.innerHTML = 'Remover';
    button.id = 'fav_' + carro.id;
    button.classList.add('productButton');

    button.addEventListener('click', function(e){
        // let li = document.querySelector('#f_'+carro.id);
        // li.remove();
        let li = e.path[1];
        li.remove();

        console.log(e);
        favCount--;
        document.querySelector('#favQuantidade').innerHTML = `(${favCount})`;
    })

    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(button);

    return li;
}
/**                  
    <li>
        <img src="./img/supra.jpg">
        <p>Toyota Supra 1998</p>
        <button id="fav_1" class="productButton">Remover</button>
    </li>

     {
        id: 7,
        modelo: 'Civic',
        ano: 1998,
        marca: 'Honda',
        imagem: './img/civic.jpg',
    }
 */