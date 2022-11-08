let sky = document.querySelector(".sky")
let button = document.querySelector(".button")

button.addEventListener("click", toggleDayNight)

function toggleDayNight(){
    // sky.classList.toggle("night")
    if(sky.classList.contains("night")){
        sky.classList.remove("night")
        button.innerText = "Dia"
    }
    else{
        sky.classList.add("night")
        button.innerText = "Noite"
    }
}