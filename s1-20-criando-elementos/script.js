/* 
 - DOM (Modelo de Objeto do Documento)
   - window.document 
     - window.document.write('Olá mundo!')
     - window.document.body.style = "background: black;"
     - document.title = "Titulo da página"
   - window.location
     - window.location.href

- Seletores
    - querySelector();
        - tag ('tag')
        - class ('.classe')
        - id ('#id')
*/

//createElement();
let p = document.createElement('p'); //criamos a tag de paragrafo
console.log(p);

p.innerHTML = "Esse texto é de teste";
console.log(p);

p.setAttribute('name', 'paragrafo');



let img = document.createElement('img');
img.src = "https://kenzie.com.br/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75";
img.alt = "Logo da kenzie";
console.log(img);

//appendChild()
let ul = document.createElement('ul');

let li_1 = document.createElement('li');
let li_2 = document.createElement('li');
let li_3 = document.createElement('li');

li_1.innerHTML = 'Thiago Koman Schmidt';
li_2.innerHTML = 'Eduardo Marinho';
li_3.innerHTML = 'Kayan Chagas';

ul.appendChild(li_1);
ul.appendChild(li_2);
ul.appendChild(li_3);

let body = document.querySelector('body');
body.appendChild(ul);

body.appendChild(img);

/* 
 - criar os elementos no javascript - createElement();
 - atualizar os valores de cada elemento  - innerHTML, setAttribute()
 - configurar a hierarquia dos elementos criados - appendChild()
 - inserir esses elementos na tela
   - refereciar um elemento já presente na página - querySelector()
   - inserir os elementos criados no elemento já presente na tela - appendChild() 
*/


// let body2 = document.getElementsByTagName('body');
// let body3 = document.querySelectorAll('body');

// let p_class1 = document.getElementsByClassName('paragrafo');
// let p_class2 = document.querySelectorAll('.paragrafo');

// let p_id1 = document.getElementById('p1');
// let p_id2 = document.querySelector('#p1');

// let teste = document.querySelector('div p');