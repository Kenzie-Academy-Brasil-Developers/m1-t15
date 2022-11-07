let p1 = document.querySelector('#parag');
let show = document.querySelector('#show');
let hide = document.querySelector('#hide');

show.addEventListener('click',function(event){
  p1.style = 'display: block;';
})

hide.addEventListener('click', function(event){
  p1.style = 'display: none;';
})

//Capturing

//Bubbling

let a = document.querySelector('a');
let p = document.querySelector('.hint');
let div = document.querySelector('#wrap');

function dblclick(event){
  event.stopPropagation();
  event.preventDefault();
  console.log(event);
  event.target.innerHTML = "Kenzie Academy Brasil"
}

a.addEventListener('dblclick', dblclick)
a.addEventListener('click', function(e){
  e.stopPropagation();
  e.preventDefault();
  console.log('click');
})

p.addEventListener('click', function(e){
  e.stopPropagation();
  console.log(e);
})

div.addEventListener('click', function(e){
  console.log(e);
})





