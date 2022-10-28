//SISTEMA DE ALUGUEL DE CARROS

let carros = [
    {
        id: 1,
        marca: "Toyota",
        modelo: "Supra",
        ano: 1998,
        cor: "Vermelho",
        placa: "TXW-1322",
        diaria: 220.00
    },
    {
        id: 2,
        marca: "Nissan",
        modelo: "Skyline",
        ano: 2001,
        cor: "Azul",
        placa: "SKY-2012",
        diaria: 215.50
    },
    {
        id: 3,
        marca: "Mitsubish",
        modelo: "Lancer",
        ano: 2008,
        cor: "Branco",
        placa: "LCR-1515",
        diaria: 190.00
    },
    {
        id: 4,
        marca: "Subaru",
        modelo: "Impreza",
        ano: 1999,
        cor: "Azul",
        placa: "IMP-0129",
        diaria: 152.00
    }
];

let countId = 1;

let alugueis = [];


let user = {
    id: 0,
    nome: "",
    anoNascimento: 0,
    cnh: "",
    alugar: function(){
        let idCarro = parseInt(prompt("Digite o id do carro a ser alugado"));

        if(!verificarDisponibilidade(idCarro)){
            alert('O veiculo está indisponivel no momento!');
            return;
        }

        let aluguel = {
            carro: idCarro,
            usuario: this.id
        }
        alert("Aluguel realizado com sucesoo");
        alugueis.push(aluguel);
    },
    orcamento: function(){
        let idCarro = parseInt(prompt("Digite o id do carro a ser alugado"));
        let dias = parseInt(prompt("Por quantos dias pretende alugar o carro?"));
        let carro = buscarCarro(idCarro);
        let valorAluguel = carro.diaria * dias;
        alert(`Você está alugando o veiculo ${carro.marca} ${carro.modelo} por ${dias} dias e o valor total fica R$${valorAluguel.toFixed(2)}`);
    },
    devolver: function(){
        let idCarro = parseInt(prompt("Digite o id do carro a ser devolvido"));
        for(let i = 0; i<alugueis.length ; i++){
            let aluguel = alugueis[i];
            if(aluguel.carro == idCarro && aluguel.usuario == this.id ){
                alugueis.splice(i,1);
                alert('Veiculo devolvido com sucesso');
                return;
            }else if(aluguel.carro == idCarro && aluguel.usuario != this.id){
                alert('Usuario não pode devolver esse veiculo!');
            }
        }
    },
    getUser: function(){
        console.log(`${this.id} - ${this.nome}`);
    }
}

let usuarios = [];
function cadastrarUsuario(){
    let nome = prompt('Digite seu nome');
    let anoNascimento = parseInt(prompt('Digite o ano de nascimento'));
    if((2022 - anoNascimento) < 18){
        alert('Cadatro inválido! Usuário precisa ter 18 anos ou mais');
        return;
    }
    let cnh = prompt('Digite sua CNH');

    let cliente = {...user};
    cliente.nome = nome;
    cliente.anoNascimento = anoNascimento;
    cliente.cnh = cnh;
    cliente.id = countId;
    countId++;

    alert("Cliente cadastrado com sucesso.");
    usuarios.push(cliente);

    return cliente;
}

function buscarCarro(idCarro){
    for(let i = 0 ; i< carros.length ; i++){
        let carro = carros[i];
        if(idCarro == carro.id){
            return carro;
        }
    }
    alert('Veiculo não cadastrado');
}

function listarCarros(){
    console.log('-- VEICULOS DA EMPRESA --');
    for(let i = 0; i<carros.length; i++){
        let carro = carros[i];  
        console.log(` ${carro.id} - ${carro.marca} ${carro.modelo} ${carro.ano}`);
    }
}

function listarCarrosDisponiveis(){
    console.log('-- VEICULOS DISPONIVEIS --');
    for(let i = 0; i<carros.length; i++){
        let carro = carros[i];  
        if(verificarDisponibilidade(carro.id)){
            console.log(` ${carro.id} - ${carro.marca} ${carro.modelo} ${carro.ano}`);
        }
    }
}

function verificarDisponibilidade(idCarro){
    for(let i = 0; i<alugueis.length; i++){
        let aluguel = alugueis[i];
        if(aluguel.carro == idCarro){
            return false;
        }
    }
    return true;
}

console.log(`Funções disponiveis \n - cadastrarUsuario() \n - buscarCarro(idCarro) \n - listarCarros() \n - listarCarrosDisponiveis() \n - verificarDisponibilidade(idCarro)`);
console.log(`Metodos disponiveis para um usuário \n - alugar() \n - orçamento() \n - devolver()`);