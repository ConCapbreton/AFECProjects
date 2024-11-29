let pokeStartCount = 0
let pokeEndCount = 20

const loadBtn = document.getElementById("load-btn")
const pokemonDisplay = document.getElementById("pokemon-display")
const nextTwentyBtn = document.getElementById("next-twenty-btn")
const prevTwentyBtn = document.getElementById("previous-twenty-btn")
const messages = document.getElementById("messages")
const searchInputElement = document.getElementById("pokemon-search")
const searchBtn = document.getElementById("pokesearch-btn")
const errorP = document.getElementById("error-p")
const searchErrorText = document.getElementById("error-search")

nextTwentyBtn.addEventListener("click", changeTwenty)
prevTwentyBtn.addEventListener("click", changeTwenty)
loadBtn.addEventListener("click", getPokemon)

// DISPLAY FUNCTION

function displayDry(id, name, image, statsHp, statsAttack, statsDefense, statsSpecialAttack, statsSpecialDefense, statsSpeed, types) {
    
    let typeArray = [] 
    types.forEach(element => typeArray.push(element.name))
    let type = typeArray.join(' ')
    
    pokemonDisplay.innerHTML += `
            <div class="pokemon">
                <div class="star-div">
                    <svg id="${id}empty-star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" style="display:block;">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                    <svg id="${id}full-star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" style="display:none;">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <h3>${id}. ${name}</h3>
                <img class="pokemon-img" src=${image} alt="${name} picture" id="${id}" width="230" height="230">
                <table class="stat-table" id="${id}table">                
                    <caption>Stats:</caption>
                    <tr>
                        <th>Type:</th>
                        <td>${type}</td>
                    </tr>
                    <tr>
                        <th>HP:</th>
                        <td>${statsHp}</td>
                    </tr>
                    <tr>
                        <th>Attack:</th>
                        <td>${statsAttack}</td>
                    </tr>
                    <tr>
                        <th>Defense:</th>
                        <td>${statsDefense}</td>
                    </tr>
                    <tr>
                        <th>Special Attack:</th>
                        <td>${statsSpecialAttack}</td>
                    </tr>
                    <tr>
                        <th>Special Defense:</th>
                        <td>${statsSpecialDefense}</td>
                    </tr>
                    <tr>
                        <th>Speed:</th>
                        <td>${statsSpeed}</td>
                    </tr>
                </table>
                <button class="add-to-favorites" value="${id}">Favorites</button>
            </div>
        `
}

//SEARCH BUTTON
searchBtn.addEventListener("click", (event) => {
    event.preventDefault()
    favoritesWarning.textContent = ''
    searchErrorText.textContent = ""
    searchErrorText.style.display = "none"

    if (localStorage.getItem("allPokemon") ==  null) {
        alert("You dont have any Pokemon yet! Click the load button first!")
        return
    }

    const localPokemonJSON = localStorage.getItem("allPokemon")
    const localPokemon = JSON.parse(localPokemonJSON)
    let searchInput = searchInputElement.value

    searchResult = localPokemon.find(element => (
        element.name.toLowerCase() === searchInput.toLowerCase() ||
        element.id === Number (searchInput)
    ))

    if (searchResult) {
        let type = searchResult.apiTypes.length === 1 ? `${searchResult.apiTypes[0].name}` : `${searchResult.apiTypes[0].name} et ${searchResult.apiTypes[1].name}`
        displayDry(searchResult.id, searchResult.name, searchResult.image, searchResult.stats.HP, searchResult.stats.attack, searchResult.stats.defense, searchResult.stats.special_attack, searchResult.stats.special_defense, searchResult.stats.speed)    
    } else {
        searchErrorText.style.display = "contents"
        searchErrorText.textContent = "We didnt find that Pokemon I'm afraid. Try you search again."
    }

    if (localStorage.getItem("favoritePokemon") ==  null) {
        return
    } else {
        //find out if a favorite pokemon is on the page
        let favoritePokemonJSON = localStorage.getItem("favoritePokemon")
        let favoritePokemon = JSON.parse(favoritePokemonJSON)
        let pokemonIsOnPage = favoritePokemon.filter(element => document.getElementById(`${element}full-star`))
        pokemonIsOnPage.forEach((element => {
            let fullStar = document.getElementById(`${element}full-star`)
            let emptyStar = document.getElementById(`${element}empty-star`)
            emptyStar.style.display = "none"   
            fullStar.style.display = "block"
        }))
    }
})

// SORT CLICKS ON POKEMON DISPLAY
pokemonDisplay.addEventListener("click", (event) => {
    event.preventDefault()
    favoritesWarning.textContent = ''
    let targetClass = event.target.className
    if (targetClass === "pokemon-img") {
        toggleTable(event)
    } else if (targetClass === "add-to-favorites") {
        favorite(event)
    } else return
})

// POKEMON TABLE TOGGLE
function toggleTable (event) {
    let targetId = event.target.id
    let tableElement = document.getElementById(`${targetId}table`)
    tableElement.style.display === "none" || tableElement.style.display === "" ? tableElement.style.display = "contents" : tableElement.style.display = "none"
} 

// NEXT OR PREVIOUS 20 POKEMON
function changeTwenty(event) {
    event.preventDefault()
    messages.innerText = ""
    let targetValue = Number (event.target.value)

    if (localStorage.getItem("allPokemon") ==  null) {
        alert("You dont have any Pokemon yet! Click the load button first!")
        return
    }

    const localPokemonJSON = localStorage.getItem("allPokemon")
    const localPokemon = JSON.parse(localPokemonJSON)
    
    if (pokeStartCount + targetValue < 0) {
        pokeStartCount = 0
        pokeEndCount = 20
        messages.textContent = "You are at the begining of the Pokedex! Click the next 20 button to see different pokemon"
    } else if (pokeEndCount === localPokemon.length && targetValue === -20) {
        pokeEndCount = localPokemon.length - (localPokemon.length % 20)
        pokeStartCount = pokeEndCount - 20
    } else if (pokeEndCount + targetValue > localPokemon.length) {
        pokeStartCount = (localPokemon.length - 20)
        pokeEndCount = localPokemon.length
        messages.textContent = "You are at the end of the Pokedex! Click the prev 20 button to see different pokemon"
    } else { 
        pokeStartCount += targetValue
        pokeEndCount += targetValue
    }

    getPokemon(event)
}

// API CALL
async function getPokemon(event) {
    event.preventDefault()
    pokemonDisplay.innerHTML = ''
    alphaWarning.textContent = alphaBool ? "Your pokemon are alphabetised" : "Your pokemon are ordered by their Id"
    
    if (localStorage.getItem("allPokemon") ==  null) {
        try {
            const data = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
            const jsonData = await data.json()
            localStorage.setItem("allPokemon", JSON.stringify(jsonData))
        } catch (err) {
            errorP.textContent = `There has been an error: ${err.message}. Try reloading the page or clicking the load button again`
            console.log("Err:", err, "\nError Msg:", err.message)
        }
    }

    const localPokemonJSON = localStorage.getItem("allPokemon")
    const localPokemon = JSON.parse(localPokemonJSON)

    let iEnd = localPokemon.length < pokeEndCount ? localPokemon.length : pokeEndCount
    for (let i = pokeStartCount; i < iEnd; i++) {
        
        displayDry(localPokemon[i].id, localPokemon[i].name, localPokemon[i].image, localPokemon[i].stats.HP, localPokemon[i].stats.attack, localPokemon[i].stats.defense, localPokemon[i].stats.special_attack, localPokemon[i].stats.special_defense, localPokemon[i].stats.speed, localPokemon[i].apiTypes)
    }
    
    favoriteStar()
    
}

function favoriteStar () {
    if (localStorage.getItem("favoritePokemon") ==  null) {
        return
    } else {
        //find out if a favorite pokemon is on the page
        let favoritePokemonJSON = localStorage.getItem("favoritePokemon")
        let favoritePokemon = JSON.parse(favoritePokemonJSON)
        let pokemonIsOnPage = favoritePokemon.filter(element => document.getElementById(element.toString()))
        pokemonIsOnPage.forEach(element => {
            let fullStar = document.getElementById(`${element}full-star`)
            let emptyStar = document.getElementById(`${element}empty-star`)
            emptyStar.style.display = "none"   
            fullStar.style.display = "block"
        })
    }
}

function favorite (event) {
    event.preventDefault()
    favoritesWarning.textContent = ''

    let favoritePokemon

    if (localStorage.getItem("favoritePokemon") ==  null) {
        favoritePokemon = []
    } else {
        let favoritePokemonJSON = localStorage.getItem("favoritePokemon")
        favoritePokemon = JSON.parse(favoritePokemonJSON)
    }

    let pokeId = Number (event.target.value)
    let emptyStar = document.getElementById(`${pokeId}empty-star`)
    let fullStar = document.getElementById(`${pokeId}full-star`)

    //check if the pokemon is a favorite 
    if (favoritePokemon.includes(pokeId)) {
        //is a favorite - want to remove it
        emptyStar.style.display = "block"   
        fullStar.style.display = "none"
        favoritePokemon = favoritePokemon.filter(element => element !== pokeId)
        localStorage.removeItem("favoritePokemon")
        localStorage.setItem("favoritePokemon", JSON.stringify(favoritePokemon)) 
    } else {
        //is not a favorite and want to add it
        emptyStar.style.display = "none"   
        fullStar.style.display = "block"
        favoritePokemon.push(pokeId)
        localStorage.removeItem("favoritePokemon")
        localStorage.setItem("favoritePokemon", JSON.stringify(favoritePokemon)) 
    }
}

//click to see favorites: 
const allFavoritesBtn = document.getElementById("all-favorites-btn")
const favoritesWarning = document.getElementById("favorites-warning")

allFavoritesBtn.addEventListener("click", (event) => {
    event.preventDefault()
    pokemonDisplay.innerHTML = ''
    favoritesWarning.textContent = ''

    let favoritePokemon

    if (localStorage.getItem("favoritePokemon") ==  null) {
        favoritesWarning.textContent = "You dont have any favorites yet!"
        return
    } else {
        let favoritePokemonJSON = localStorage.getItem("favoritePokemon")
        favoritePokemon = JSON.parse(favoritePokemonJSON)
    }

    if (localStorage.getItem("allPokemon") ==  null) {
        alert("You dont have any Pokemon yet! Click the load button first!")
        return
    }

    if (favoritePokemon.length === 0) {
        favoritesWarning.textContent = "You dont have any favorites yet!"
        return
    }

    const localPokemonJSON = localStorage.getItem("allPokemon")
    const localPokemon = JSON.parse(localPokemonJSON)

    let pokemonToDisplay = localPokemon.filter(element => favoritePokemon.includes(element.id))
    
    pokemonToDisplay.forEach(element => {

        displayDry(element.id, element.name, element.image, element.stats.HP, element.stats.attack, element.stats.defense, element.stats.special_attack, element.stats.special_defense, element.stats.speed, element.apiTypes)

    })

    favoriteStar()
})

//Alphabetise your pokemon: 

let alphaBool
const alphaBtn = document.getElementById("alpha-btn")
const alphaWarning = document.getElementById("alpha-warning")

alphaBtn.addEventListener("click", (event) => {
    event.preventDefault()

    if (localStorage.getItem("allPokemon") ==  null) {
        alert("You dont have any Pokemon yet! Click the load button first!")
        return
    }

    alphaBool = alphaBool === true ? false : true 

    const localPokemonJSON = localStorage.getItem("allPokemon")
    const localPokemon = JSON.parse(localPokemonJSON)

    if (alphaBool) {
        //alphabetise pokemon
        alphaWarning.textContent = "Your pokemon are alphabetised"
        localPokemon.sort(function(a, b) {return a.name.localeCompare(b.name)})
        localStorage.removeItem("allPokemon")
        localStorage.setItem("allPokemon", JSON.stringify(localPokemon))
        getPokemon(event)
    } else {
        //order by id
        alphaWarning.textContent = "Your pokemon are ordered by their Id"
        localPokemon.sort((a, b) => a.id - b.id)
        localStorage.removeItem("allPokemon")
        localStorage.setItem("allPokemon", JSON.stringify(localPokemon))
        getPokemon(event)
    }
})