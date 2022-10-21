// let nome = "Kayan"
// let idade = 21
// let modulos = ["M1", "M2"]

// let aluno = {
//     nome: "Kayan",
//     idade: 21,
//     modulos: ["M1", "M2"],
//     email: "kayan@gmail.com",
//     ativo: true
// }

// console.log(aluno.nome)
// console.log(aluno.idade)
// console.log(aluno.modulos)

// aluno.nome = "Kayan Chagas"

// console.log(aluno.nome)

// aluno.modulos.push("M3")

// console.log(aluno.modulos)

// let aluno2 = {
//     nome: "João",
//     idade: 25,
//     modulos: ["M1"],
//     cidade: "São Paulo - SP",
//     email: "joao@gmail.com",
//     ativo: true
// }


let alunos = []

function criarAluno(nome, idade, modulos, email){
    let novoAluno = {
        nome: nome,
        idade: idade,
        modulos: modulos,
        email: email,
        ativo: true
    }
    
    return novoAluno
}

let aluno1 = criarAluno("Kayan", 21, ["M1","M2"], "kayan@gmail.com")

aluno1.nome = "Kayan Chagas"

console.table(aluno1)

alunos.push(aluno1)

let aluno2 = criarAluno("João", 25, ["M1"], "joao@gmail.com")
alunos.push(aluno2)

console.table(alunos);