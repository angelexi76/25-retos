/*open ,close estan en el html con id y .container como class y trae los iconos open y close del menu*/


const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

function AddShownav(){
    return container.classList.add('show-nav');

}
function RemoveShownav(){
    return container.classList.remove('show-nav');
}

open.addEventListener('click',AddShownav);
close.addEventListener('click',RemoveShownav);


/*addshownav y removeshownav muestra y esconde el menu
y addEventListener adiciona el evento con el click*/