let a = document.querySelector('a');
a.setAttribute('target','_blank');

console.log(a.getAttribute('href'));

let as = document.querySelectorAll('a');
for(let i = 0 ; i<as.length; i++){
    let a = as[i];
    if(a.getAttribute('target') != '_blank'){
        a.setAttribute('target','_blank');
    }
}

let firstA = document.querySelector('a');
firstA.removeAttribute('target');

a.classList.remove('teste1');
a.classList.add('teste');


//INSERTADJACENTHTML()
let div = document.querySelector('#pai');
div.appendChild(a);

let b = document.createElement('a');
b.innerHTML = 'Site da Kenzie 2';
div.appendChild(b);

div.insertAdjacentHTML("beforebegin", '<p>beforebegin</p>')
div.insertAdjacentHTML("afterbegin", '<p>afterbegin</p>')
div.insertAdjacentHTML("beforeend", '<p>beforeend</p>')
div.insertAdjacentHTML("afterend", '<p>afterend</p>')

let a1 = document.createElement('a');
a1.innerHTML = 'Site da Kenzie';
div.insertAdjacentElement("beforeend", a1);


let ps = document.querySelectorAll('#pai p');

let a2 = document.createElement('a');
a2.innerHTML = 'texto padrão';

for(let i = 0; i < ps.length ; i++){
    if(ps[i].innerHTML == 'filho2'){
        ps[i].insertAdjacentElement("beforebegin", a2);
    }
}



