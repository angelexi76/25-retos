const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
let text ='We Love Programming'
let idx = 1
let speed = 200 / speedEl.value

writeText()

function writeText () {

    textEl.innerText =text.slice(0, idx)


    idx++

    if(idx > text.length) {
        idx = 1
    }
/*esto regula la velocidad con que se muestra el texto*/ 
    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 200 / e.Target.value)

//e representa el evento y target es quien recibio el evento //
/*se llamo el id de la linea 14 de html en un elementByid */