let contador = 0;
console.log(contador); 

//contador = contador + 1;

contador+=1; 
console.log(contador);
contador++;  
console.log(contador);
contador = contador + 1; 
console.log(contador);
contador++; 
console.log(contador);
contador++; 
console.log(contador);


//CONDICIONAIS
//IF, ELSE IF e ELSE

let nome = prompt('Digite o seu nome');
console.log(nome);

//Se nome igual a "Thiago"
 if(nome == "Thiago"){
    alert("Acesso liberado!");
}else{
    alert("Acesso bloqueado");
}

//senão, caso contrário

//ESCOPO DE VARIAVEL
/*
let
const
var
*/

let nome2 = "Thiago";

if(true){
   let nome2 = "Hudson";
   console.log(nome2);
}

console.log(nome2);


// Not (!)  - negação
// Or  (||) - Ou
// And (&&) - E

//True, False


let nome3 = prompt('Digite o seu nome');
console.log(nome3);

if(nome3 == "Thiago" || nome3 == "Hudson"){
    alert("Acesso liberado");
}else{
    alert("Acesso bloqueado");
}


let nome4 = prompt('Digite o seu nome');
console.log(nome4);

let senha = parseInt(prompt('Digite a sua senha'));
console.log(senha);

if(nome4 == "Thiago" && senha === 1234){
    alert("Acesso liberado");
}else{
    alert("Acesso bloqueado");
}


/* 
AND
true && true   = true
true && false  = false
false && true  = false
false && false = false

OR
true || true   = true
true || false  = true
false || true  = true
false || false = false
*/


let nome5 = prompt("Digite seu nome:");

if(nome5 === "Thiago"){
    let senha5 = prompt("Digite a sua senha");
    if(senha5 === "1234"){
        alert("Acesso Liberado");
    }else{
        alert("Senha errada");
    }

}else{
    alert("Nome não cadastrado");
}
