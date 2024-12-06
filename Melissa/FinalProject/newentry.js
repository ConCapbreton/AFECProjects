let mushroomsArray
let mushroomInstancesArray = []

const newEntrySaveBtn = document.getElementById("newentry-save-btn")
const nameInput = document.getElementById("name")
const fileInput = document.getElementById("file-input")
const speciesInput = document.getElementById("species")
const latitudeInput = document.getElementById("latitude")
const longitudeInput = document.getElementById("longitude")
const dateInput = document.getElementById("date")
const timeInput = document.getElementById("time")
const commentInput = document.getElementById("text-area")
const imgInput = document.getElementById("newentry-image")

//GET MUSHROOMS 
window.onload = () => getMushrooms()

const getMushrooms = async () => {
    //loading message?

    try {
        let mushroomsJson = await fetch("./mushrooms.json")
        let mushroomsObj = await mushroomsJson.json()
        mushroomsArray = mushroomsObj.mushrooms
        mushroomsInstances(mushroomsArray)
        localStorage.setItem("mushroomArray", JSON.stringify(mushroomInstancesArray))
        //JSON.parse to retreive
        
        

        //GOT MUSHROOMS MESSAGE
    } catch (error) {
        //ERROR MESSAGE = `There has been an error: ${error.message}`
    } 
}

const mushroomsInstances = (array) => {
    array.forEach((element) => {
        let newMushroom = new Mushroom(element.id, element.name, element.file, element.species, element.latitude, element.longitude, element.date, element.time, element.comment) 
        mushroomInstancesArray.push(newMushroom)
    })
    console.log(mushroomInstancesArray)
} 


newEntrySaveBtn.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(latitudeInput.value)

    //GOING TO NEED TO ADD AN ID BASED ON THE LENGTH OF THE ARRAY
    let id = mushroomInstancesArray.length + 1
    let newMushroom = new Mushroom(id, nameInput.value, fileInput.value, speciesInput.value, latitudeInput.value, longitudeInput.value, dateInput.value, timeInput.value, commentInput.value) 
    mushroomInstancesArray.push(newMushroom)
    console.log(mushroomInstancesArray)
})

class Mushroom {
    constructor(id, name, file, species, latitude, longitude, date, time, comment) {
        this.id = id,
        this.name = name,
        this.file = file,
        this.species = species,
        this.latitude = latitude,
        this.longitude = longitude,
        this.date = date,
        this.time = time,
        this.comment = comment
    }
}

// <input id="file-input" type="file" name="file-input" accept=".jpg, .jpeg, .png">
/* <label class="column-one" for="name">Name:</label>
<input class="column-two" type="text" id="name" name="name" placeholder="Name" required>
<label for="species">Species:</label>
<select id="species" class="column-two">
    <option>Scientific name</option>
    <option>Boletus edulis Bull</option>
    <option>Cantharellus cibarius</option>
    <option>Hydnum repandum</option>
</select>
<label class="column-one" for="latitude">Latitude:</label>
<input class="column-two" type="number" id="latitude" name="latitude" placeholder="Latitude">
<label class="column-one" for="Longitude">Longitude:</label>
<input class="column-two" type="number" id="Longitude" name="Longitude" placeholder="Longitude">
<label class="column-one" for="date">Date:</label>
<input class="column-two" type="date" id="date" name="date" required>
<label class="column-one" for="time">Time:</label>
<input class="column-two" type="time" id="time" name="time">
<label class="column-one" for="text-area">Comments:</label>
<textarea class="column-two" id="text-area" name="text-area"></textarea> */