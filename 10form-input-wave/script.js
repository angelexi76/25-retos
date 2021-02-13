const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style = "transition-delay:${idx * 60}ms">${letter}</span>`)
        .join('')
})
/*idx *60 me genero el movimiento entre mas alto su valor mas bonito se ve idx es una función de utilidad para atravesar propiedades en objetos y matrices.,*/ 