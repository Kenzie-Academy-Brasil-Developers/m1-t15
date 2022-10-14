// not - !
// and - &&
// or  - ||

//Exemplo da utilização do operador lógico not(!)
let lampada = false;

console.log(lampada);
lampada = !lampada;


//Tema: Função
function nomeDaFuncao(){
    let nome = prompt("Digite seu nome");
    alert(nome);
} 

function recebeNome(){
    let nome = prompt("Digite seu nome");
    return nome;
} 

let retorno = recebeNome();
console.log(retorno);


// Exemplificando o uso de funções com a função calculadora.
function soma(a, b){
    let resultado = a + b; //somando a e b e armazendo o resultado na variavel "resultado"
    return resultado; //retornando o resultado obtido
}

function subtrai(a, b){
    return a - b;
}

function calculadora(a,b,sinal){
    if(sinal === "+"){
        resultado = soma(a,b);
        alert(`O resultado da sua operação foi: ${resultado}`);
    }else if(sinal === "-"){
        resultado = subtrai(a,b);
    }else{
        alert("O sinal recebido é inválido!");
        return;
    }

   
}



//Exercicio S3-10 ex.9 (resolução com função)
function verificaNumber(n){
    if(n<10){
        return "0"+n;
    }else{
        return n;
    }
}

let diaAtual = 14;
let mesAtual = 10;
let anoAtual = 22;

function formataData(dia, mes, ano){
    return `${verificaNumber(dia)}/${verificaNumber(mes)}/${ano}`;
}

let dataAtualFormatada = formataData(diaAtual, mesAtual, anoAtual);

console.log(dataAtualFormatada);



//Exercicio S3-25 ex.7 (resolução com função)
function getCodigo(n){
    let str = `${n}`;

    let a = parseInt(str[0]) * 1;
    let b = parseInt(str[1]) * 2;
    let c = parseInt(str[2]) * 3;

    let resultado = a+b+c;
    return resultado;
}

function inverteCodigo(n){
    let str = `${n}`;

    let a = str[0];
    let b = str[1];
    let c = str[2];

    let codigoInverso = parseInt(c+b+a)
    return codigoInverso; 
}

function getVerificador(n){

    let soma = inverteCodigo(n) + n;
    let resultado = getCodigo(soma);

    return resultado; 
}

console.log(getVerificador(235));


