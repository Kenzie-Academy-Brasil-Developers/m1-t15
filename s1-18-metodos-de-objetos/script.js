//Atributos 
let produto = {
    tipo: "Alimento",
    nome: "Feijão Carioca",
    valor: 5.49,
    unidade: "kg",
    quandidade: 1 
}
// console.log(produto.tipo);
// console.log(produto.valor);

//Métodos
let gato = {
    miar: function(){
        alert("Miau");
    },
    ronronar: function(){
        alert("Ronronron");
    }
}
// gato.miar();
// gato.ronronar();

/*
+ soma
- subtração
* multiplicação
/ divisão
*/
// function calculadora(a,b,op){
//     if(op == '+'){
//         return a+b;
//     }else if(op == '-'){
//         return a-b;
//     }else if(op == '*'){
//         return a*b;
//     }else if(op == '/'){
//         return a/b;
//     }
//     return "Operação invalida";
// }

let calculadora = {
    a: 12,
    b: 3,
    c: 2, 
    somar: function(){
        return this.a + this.b;
    },
    subtrair: function(){
        return this.a - this.b;
    },
    multiplicar: function(){
        return this.a * this.b;
    },
    dividir: function(){
        return this.a / this.b;
    },
    somarP: function(a,b){
        return a+b;
    },
    metade: function(n){
        return n/this.c;
    }
}

console.log(calculadora.metade(12));


function formatNumber_2Decimals(n){
    let num = n.toFixed(2);
    return parseFloat(num);
}

function formatNumber_percetageToUnity(n){
    let unity = n/100;
    return unity;
}

//100 * formatNumber_percetageToUnity(5) = 5


let pet = {
    especie: "Gato",
    pelagem: "Curta",
    raca: "Siames",
    nome: "Felicia",
    miar: function(){
        alert("Maiu");
    },
    ronronar: function(){
        alert("Ronronron");
    }
}


