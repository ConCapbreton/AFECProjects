const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")
const messageP = document.getElementById("message-p")
const movieDisplay = document.getElementById("movie-display")
let searchData
let yourMovie

window.onload = event => loadPage(event) 
    
function loadPage(event) {
    event.preventDefault()
    let urlCurrent = window.location.search;
    console.log("urlCurrent", urlCurrent)
    const getId = new URLSearchParams(urlCurrent);
    console.log("getId", getId)
    const id = getId.get("id");
    console.log(id)
}
   

// movieDisplay.addEventListener("click", async (event) => {
//     event.preventDefault()
//     let id = event.target.id

//     const API_KEY = "f869b99"
//     const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`

//     messageP.innerText = "LOADING..."
//     try {
//         let fetchMovieJson = await fetch(URL)
//         let fetchMovie = await fetchMovieJson.json()
//         yourMovie = fetchMovie    
//     } catch (error) {
//         console.log(error.message)
//         messageP.innerText = `There was an error: ${error.message}`
//     } finally {
//         messageP.innerText = "See search results below."
//     }

//     console.log(yourMovie)

//     window.location.href = 'http://127.0.0.1:5500/yourMovie.html'
// })


// window.location.search (get thes request string after the ?), like ?id=tt1234567
// let myParam = new URLSearchParams(window.location.search)
// file:///C:Users/ODDO/PROJECT/newMovie/oneMOvie.html?id=tt0118688

// URLSearchParams (easily allows you to manipulate the paramters of the URL

// myParam.get("id") extract the id value 
//let myId = myParam.get("id")
// console.log(myId)
// tt0118688

// let APIKEY = "f869b99"


