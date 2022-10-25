// let array =  [1,3,5,7,9,11,13,15,17,19];

// for(let i = 0; i<array.length; i++){
//     console.log(array[i]);
// }

let array2 = [12, 'Hudson', [12,22], {nome:'Hudson', cargo: 'Instrutor'}];

for(let i = 0; i<array2.length; i++){
    console.log(array2[i]);
}

// let arrayAninhado = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for(let i = 0; i < arrayAninhado.length; i++){
//     let array = arrayAninhado[i];

//     for(let j = 0 ; j<array.length; j++){
//         console.log(array[j]);
//     }
// }

let arrayNotas = [
    //[matematica, quimica, fisica, filosofia, historia]
    // Aluno 1
    [100, 45, 56, 87, 100],
    // Aluno 2
    [89, 88, 100, 22, 15],
    // Aluno 3
    [90, 80, 75, 80, 100],
    // Aluno 4
    [100, 100, 100, 100, 95]
];

function listarNotas(array){
    for(let i = 0; i<array.length; i++){
        console.log(`Notas do aluno: ${i+1}`);
        let aluno = array[i];
        for(let j = 0 ; j<array[i].length; j++){
            let nota = aluno[j];
            //nota é iagual á array[i][j]
            console.log(nota);
        }
    }
}
//listarNotas(arrayNotas);


function alunoAprovado(array){
    for(let i = 0; i<array.length; i++){
        let aluno = array[i];
        let soma = 0;
        let cont = 0;   
        for(let j = 0 ; j<aluno.length; j++){
            let nota = aluno[j];
            soma += nota; //soma = soma + nota
            cont++;
        }

        let media = (soma/cont).toFixed(2);

        if(media >= 80){
            console.log(`O aluno ${i+1} foi aprovado com a média ${media}`);
        }else{
            console.log(`O aluno ${i+1} não foi aprovado e ficou com a média ${media}`);
        }

    }

}
alunoAprovado(arrayNotas);
    


