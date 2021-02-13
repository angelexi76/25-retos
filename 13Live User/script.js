const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()
/*filter filtra la data perdida*/ 
filter.addEventListener('input', (e) => filterData(e.target.value))

/*la funcion debe ser asincrona para recibir la data */

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
/**se guardo la api en res y luego se llama res.js para qu ela convierta en in json */
    const {results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
        </div>
        
        `
 /**se creo una lista y con push la envio al array vacio de listitem */
        

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}