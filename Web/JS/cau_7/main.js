const domain = 'https://pokeapi.co/api/v2'
const endpoint = 'pokemon'

async function getPokemonNames(pokemonID) {
    const start_time = new Date().valueOf()
    const pokemonName = [];
    for (let i = 0; i < pokemonID.length; i++) {
        pokemonName.push(await getPokemon(`${domain}/${endpoint}/${pokemonID[i]}`))
    }
    return pokemonName
}

function main() {
    const pokemonId = []
    for (let i = 0; i < 10; i++) {
        pokemonId.push(Math.floor(Math.random() * 600))
    }
    console.time('Operation')
    getPokemonNames(pokemonId)
        .then(pokemons => {
            console.log(pokemons)
            console.timeLog("Operation")
        })
}
let arr = []
async function getPokemon(url) {
    fetch(`${url}/${endpoint}`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0 ; i < data.results.length ; i++){
            arr.push(data.results[i].name)
        }
    })  
}

getPokemon(domain)

function showName(){
    const btn = document.getElementById("btn")
    let xdiv = '<div class="demoDiv"></div>'
    for (let i = arr.length - 1; i >= 0 ; i--) {
        btn.insertAdjacentHTML("afterend", xdiv)
        let getTextArr = document.querySelector(".demoDiv");
        getTextArr.innerText = `${i+1}: ${arr[i]}`
    }
    btn.remove()
}
