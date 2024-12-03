const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")
const messageP = document.getElementById("message-p")
const movieDisplay = document.getElementById("movie-display")
let searchData
let yourMovie


searchBtn.addEventListener("click", async (event) => {
    event.preventDefault()
    let title = searchInput.value
    const API_KEY = "f869b99"
    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`

    if (title === "") {
        messageP.innerText =  "Type the movie title and then click the button"
        return
    }

    messageP.innerText = "LOADING..."
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            let searchData = data.Search
            console.log(searchData)
            searchData.forEach(element => {
                console.log(element.imdbID)
                movieDisplay.innerHTML += `
                    <div class="movie-div" id="${element.imdbID}">
                        <h2 id="${element.imdbID}">${element.Title}</h2>
                        <img id="${element.imdbID}" src="${element.Poster}" height="300" width="300" alt="${element.Title} poster">
                        <p id="${element.imdbID}">Type: ${element.Type}</p>
                        <p id="${element.imdbID}">Year: ${element.Year}</p>
                        <p><a href="./yourmovie.html?id=${element.imdbID}">Click to see the movie</a></p>
                    </div>
                    `
                })
        })
        .catch(err => {
            console.log(err.message)
            messageP.innerText = `There was an error: ${err.message}`
        })
        .finally(
            messageP.innerText = "See search results below."
        )
})




movieDisplay.addEventListener("click", async (event) => {
    event.preventDefault()
    let id = event.target.id

    const API_KEY = "f869b99"
    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`

    messageP.innerText = "LOADING..."
    try {
        let fetchMovieJson = await fetch(URL)
        let fetchMovie = await fetchMovieJson.json()
        yourMovie = fetchMovie    
    } catch (error) {
        console.log(error.message)
        messageP.innerText = `There was an error: ${error.message}`
    } finally {
        messageP.innerText = "See search results below."
    }

    console.log(yourMovie)

    window.location.href = 'http://127.0.0.1:5500/yourMovie.html'
})


// window.location.search (get thes request string after the ?), like ?id=tt1234567
// let myParam = new URLSearchParams(window.location.search)
// file:///C:Users/ODDO/PROJECT/newMovie/oneMOvie.html?id=tt0118688

// URLSearchParams (easily allows you to manipulate the paramters of the URL

// myParam.get("id") extract the id value 
//let myId = myParam.get("id")
// console.log(myId)
// tt0118688

// let APIKEY = "f869b99"


