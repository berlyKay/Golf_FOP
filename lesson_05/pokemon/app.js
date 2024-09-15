document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
    const choice = document.querySelector('input').value
    const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
    
    let data = await fetch(url)
    let pokemonInfo = await data.json()

    let photo = pokemonInfo.sprites.front_default
    let shinyPhoto = pokemonInfo.sprites.front_shiny
    let name = pokemonInfo.name
    // const checked = document.getElementsByClassName(".check").checked
    const isChecked = document.getElementById("subscribe").checked

    if (isChecked) {
        document.querySelector("img").src = shinyPhoto
        // console.log(pokemonInfo.sprites.front_shiny)
    } else {
        document.querySelector("img").src = photo
        // console.log(pokemonInfo.sprites.front_default)
    }

    document.querySelector("h2").textContent = name
    const pokemonType= document.querySelector(".type").innerText = pokemonInfo.types[0].type.name
    document.querySelector(".type").textContent = pokemonType
    // console.log(pokemonType)
    // console.log(pokemonInfo.types)
    // console.log(pokemonInfo.results[9])
}