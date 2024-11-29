let pokeStartCount = 0
let pokeEndCount = 20
let allPokemon
let iEnd
let alphaBool

const pokemonDisplay = document.getElementById("pokemon-display")
const nextTwentyBtn = document.getElementById("next-twenty-btn")
const prevTwentyBtn = document.getElementById("previous-twenty-btn")
const messages = document.getElementById("messages")
const searchInputElement = document.getElementById("pokemon-search")
const searchBtn = document.getElementById("pokesearch-btn")
const errorP = document.getElementById("error-p")
const searchErrorText = document.getElementById("error-search")
const alphaBtn = document.getElementById("alpha-btn")
const alphaWarning = document.getElementById("alpha-warning")

nextTwentyBtn.addEventListener("click", changeTwenty)
prevTwentyBtn.addEventListener("click", changeTwenty)

// API CALL TO LOAD POKEMON
window.onload = (event) => getPokemon(event)

async function getPokemon(event) {
    event.preventDefault()
    pokemonDisplay.innerHTML = ''
    alphaWarning.textContent = "Your pokemon are ordered by their Id. Click the Display button again to put them in alphabetic order."
    
    try {
        errorP.textContent = "Loading..."
        const data = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
        const jsonData = await data.json()
        allPokemon = jsonData
        errorP.textContent = ""
    } catch (err) {
        errorP.textContent = `There has been an error: ${err.message}. Try reloading the page.`
        console.log("Err:", err, "\nError Msg:", err.message)
    }

    iEnd = allPokemon.length < pokeEndCount ? allPokemon.length : pokeEndCount

    for (let i = pokeStartCount; i < iEnd; i++) {
        displayDry([allPokemon[i]])
    }
    
    favoriteStar()
}

// NEXT OR PREVIOUS 20 POKEMON
function changeTwenty(event) {
    event.preventDefault()
    messages.innerText = ""
    searchErrorText.style.display = "none"
    let targetValue = Number (event.target.value)
    
    if (pokeStartCount + targetValue < 0) {
        pokeStartCount = 0
        pokeEndCount = 20
        messages.textContent = "You are at the begining of the Pokedex! Click the next 20 button to see different pokemon"
    } else if (pokeEndCount === allPokemon.length && targetValue === -20) {
        pokeEndCount = allPokemon.length - (allPokemon.length % 20)
        pokeStartCount = pokeEndCount - 20
    } else if (pokeEndCount + targetValue > allPokemon.length) {
        pokeStartCount = (allPokemon.length - 20)
        pokeEndCount = allPokemon.length
        messages.textContent = "You are at the end of the Pokedex! Click the prev 20 button to see different pokemon"
    } else { 
        pokeStartCount += targetValue
        pokeEndCount += targetValue
    }

    let iEnd = allPokemon.length < pokeEndCount ? allPokemon.length : pokeEndCount

    pokemonDisplay.innerHTML = ''
    for (let i = pokeStartCount; i < iEnd; i++) {
        displayDry([allPokemon[i]])
    }
    favoriteStar()
}

// SORT CLICKS ON POKEMON DISPLAY
pokemonDisplay.addEventListener("click", (event) => {
    event.preventDefault()
    searchErrorText.style.display = "none"
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

//SEARCH BUTTON
searchBtn.addEventListener("click", async (event) => {
    event.preventDefault()
    favoritesWarning.textContent = ""
    searchErrorText.textContent = ""
    searchErrorText.style.display = "none"
    pokemonDisplay.innerHTML = ""
    
    let searchPokemon
    let searchInputOne = searchInputElement.value

    if (searchInputOne === "") {
        searchErrorText.style.display = "block"
        searchErrorText.textContent = "Please enter a pokemon name or id or click the Display button to see all pokemon."
        return
    }

    let searchInputNumber = Number (searchInputOne)

    let searchInput
    if (isNaN(searchInputNumber)) {
        let searchInputTwo = searchInputOne.toLowerCase()
        searchInput = `${searchInputTwo.charAt(0).toUpperCase()}${searchInputTwo.slice(1, searchInputTwo.length)}`
    } else {
        searchInput = searchInputNumber
    }
        
    try {
        searchErrorText.style.display = "block"
        searchErrorText.textContent = "Searching"
        const data = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${searchInput}`)
        const jsonData = await data.json()
        searchPokemon = jsonData
        searchErrorText.textContent = "Pokemon found!"
    } catch (err) {
        searchErrorText.style.display = "block"
        searchErrorText.textContent = "We didnt find that Pokemon I'm afraid. Try you search again or click the Display button to see all pokemon."
        console.log("Err:", err, "\nError Msg:", err.message)
    }

    displayDry([searchPokemon])    
    favoriteStar()
    
})


// ADD OR REMOVE FAVORITE POKEMON
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

//CLICK TO SEE FAVORITES: 
const allFavoritesBtn = document.getElementById("all-favorites-btn")
const favoritesWarning = document.getElementById("favorites-warning")

allFavoritesBtn.addEventListener("click", (event) => {
    event.preventDefault()
    pokemonDisplay.innerHTML = ''
    favoritesWarning.textContent = ''
    searchErrorText.style.display = "none"

    let favoritePokemon

    if (localStorage.getItem("favoritePokemon") ==  null) {
        favoritesWarning.textContent = "You dont have any favorites yet! Click the Display button to see all pokemon."
        return
    } else {
        let favoritePokemonJSON = localStorage.getItem("favoritePokemon")
        favoritePokemon = JSON.parse(favoritePokemonJSON)
    }

    if (favoritePokemon.length === 0) {
        favoritesWarning.textContent = "You dont have any favorites yet! Click the Display button to see all pokemon."
        return
    }

    let pokemonToDisplay = allPokemon.filter(element => favoritePokemon.includes(element.id))
    
    pokemonToDisplay.forEach(element => {
        displayDry([element])
    })
    favoriteStar()
})

//ALPHABETISE YOUR POKEMON: 
alphaBtn.addEventListener("click", (event) => {
    event.preventDefault()
    searchErrorText.style.display = "none"

    alphaBool = alphaBool === true ? false : true 

    if (alphaBool) {
        //alphabetise pokemon
        alphaWarning.textContent = "Your pokemon are alphabetised, click the Display button again to put them in order of Id."
        allPokemon.sort(function(a, b) {return a.name.localeCompare(b.name)})
    } else {
        //order by id
        alphaWarning.textContent = "Your pokemon are ordered by their Id. Click the Display button again to put them in alphabetic order."
        allPokemon.sort((a, b) => a.id - b.id)
    }

    let iEnd = allPokemon.length < pokeEndCount ? allPokemon.length : pokeEndCount

    pokemonDisplay.innerHTML = ''
    for (let i = pokeStartCount; i < iEnd; i++) {
        displayDry([allPokemon[i]])
    }
    favoriteStar()

})

// DISPLAY FUNCTION
function displayDry(array) {
    
    array.forEach(element => {
        let typeArray = [] 
        element.apiTypes.forEach(element => typeArray.push(element.name))
        let type = typeArray.join(' ')

        pokemonDisplay.innerHTML += `
            <div class="pokemon">
                <div class="star-div">
                    <svg id="${element.id}empty-star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" style="display:block;">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                    <svg id="${element.id}full-star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" style="display:none;">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <h3>${element.id}. ${element.name}</h3>
                <img class="pokemon-img" src=${element.image} alt="${element.name} picture" id="${element.id}" width="230" height="230">
                <table class="stat-table" id="${element.id}table">                
                    <caption>Stats:</caption>
                    <tr>
                        <th>Type:</th>
                        <td>${type}</td>
                    </tr>
                    <tr>
                        <th>HP:</th>
                        <td>${element.statsHp}</td>
                    </tr>
                    <tr>
                        <th>Attack:</th>
                        <td>${element.statsAttack}</td>
                    </tr>
                    <tr>
                        <th>Defense:</th>
                        <td>${element.statsDefense}</td>
                    </tr>
                    <tr>
                        <th>Special Attack:</th>
                        <td>${element.statsSpecialAttack}</td>
                    </tr>
                    <tr>
                        <th>Special Defense:</th>
                        <td>${element.statsSpecialDefense}</td>
                    </tr>
                    <tr>
                        <th>Speed:</th>
                        <td>${element.statsSpeed}</td>
                    </tr>
                </table>
                <button class="add-to-favorites" value="${element.id}">Favorites</button>
            </div>
        `
    })
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