
// Variables
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2")
let span = document.getElementById("contador")
let contador = 1


// AddEventListener - btn and btn2
btn.addEventListener("click", () => {  
    span.innerText = contador += 1
})

btn2.addEventListener("click", () => {
    btn2.disabled = false
    span.innerText = contador -= 1

    // Loop Main
    while (contador < 1){
        btn2.disabled = true
        contador += 1

    }
    btn2.disabled = false
})



