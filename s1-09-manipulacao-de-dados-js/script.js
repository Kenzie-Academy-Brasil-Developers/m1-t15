/*
let nome = "Thiago";
let sobrenome = "Koman";

let nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

let nomeCompletoTemplateString = `${nome} ${sobrenome}`;

console.log(nomeCompletoTemplateString);

let nomeLength = nome.length;
let sobrenomeLength = sobrenome.length;
let nomeCompletoLength = nomeCompleto.length;


console.log(nome, nomeLength); //6
console.log(sobrenome, sobrenomeLength); //5
console.log(nomeCompleto, nomeCompletoLength); //12


// T h i a g o  
// 1 2 3 4 5 6 7 - Tamanho da string ( posição )
// 0 1 2 3 4 5 6 - Indice

 let ultimoCaractere = nome[nomeLength - 1]
 console.log(ultimoCaractere);

let abrevicao = nome[0] + "." + sobrenome[0];
console.log(abrevicao);

*/

//ENTRADA E SAIDA DE DADOS

let nome = prompt("Digite seu nome!");
let sobrenome = prompt("Digite seu sobrenome!");

let abreviacao = nome[0] + sobrenome[0];
alert(abreviacao);


//Calculo do IMC
//peso / (altura*altura)

//float -> 1.25, 2.50, 3.1415
//int -> 1, 2, 3


let peso = parseFloat( prompt("Digite seu peso!") );

let alturaString = prompt("Digite a sua altura!");
let altura = parseFloat(alturaString);

let resultado = peso/(altura*altura);

alert(`Seu IMC é: ${resultado.toFixed(0)}`);

//COMPARADORES

// let a = prompt("Digite um valor de 1 a 10");
// let b = prompt("Digite outro valor de 1 a 10");

/*

4 == "4" //  true  
4 != "4" //  false

4 === "4" // false
4 !== "4" // true
*/

//toLowerCase toUpperCase




