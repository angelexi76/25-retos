const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
/*aca se inicia la difuminacion */ 
let int = setInterval(blurring, 30)
 
function blurring() {
    load++
/*clearInterval detiene el bucle de difuminacion cuando llega a 100*/
    if(load>99){
        clearInterval(int)
        console.log
       
    }
/* */ 
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load,0,100,1,0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)

}
 
  
  