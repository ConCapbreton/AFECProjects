// Exercise 1

const changeBtn = document.getElementById("btn-change")
const resetBtn = document.getElementById("btn-reset")
const pToChange = document.getElementById("to-change")

changeBtn.addEventListener("click", () => {
    let decide = Math.floor(Math.random() * (4 - 1) + 1)

    if (decide === 3 ) {
        pToChange.style.color = "red"
        pToChange.style.backgroundColor = "black"
    } else if (decide === 2) {
        pToChange.style.color = "blue"
        pToChange.style.backgroundColor = "pink"
    } else {
        pToChange.style.color = "purple"
        pToChange.style.backgroundColor = "yellow"
    }
})

resetBtn.addEventListener("click", () => {
    pToChange.style.color = "black"
    pToChange.style.backgroundColor = "white"   
})

// Exercise 2

const createBtn = document.getElementById("btn-create")

createBtn.addEventListener("click", () => {

    //Create Parent
    const parentDiv = document.getElementById("parent-div")
    parentDiv.style.width = "100%"

    //Create Title
    const title = document.createElement("h3")
    title.setAttribute("class", "title-remove")
    title.innerText = "Title create dynamically!"
    title.style.height = "24px" 
    title.style.color = "red" 
    title.style.textDecoration = "bold" 
    title.style.width = "100%"
    title.style.textAlign = "center"
    title.style.margin = "2rem auto 0 auto"

    //Create P container and p elements
    const pContainerDiv = document.createElement("div")
    const firstP = document.createElement("p")
    const secondP = document.createElement("p")
    firstP.textContent = "Mon premiere paragraph"
    secondP.textContent = "Mon deuxieme paragraph"
    firstP.setAttribute("class", "removal")
    secondP.setAttribute("class", "removal")

    //Append the right children on the right parents
    parentDiv.appendChild(title)
    parentDiv.appendChild(pContainerDiv)
    pContainerDiv.appendChild(firstP)
    pContainerDiv.appendChild(secondP)

    //Final challenge
    const firstText = firstP.innerText
    const concatText = firstText + " c'est le plus long"
    console.log(concatText)

})

const removeBtn = document.getElementById("remove-button")

removeBtn.addEventListener("click", () => {
    const lastPCreated = document.querySelectorAll(".removal")
    const pToRemove = lastPCreated[lastPCreated.length - 1]
    console.log(pToRemove)
    pToRemove.remove()
})

const removeTitleBtn = document.getElementById("remove-title-button")

removeTitleBtn.addEventListener("click", () => {
    const titles = document.querySelectorAll(".title-remove")
    titles.forEach(element => element.remove())
})

//Exercise 3

const createBtnInner = document.getElementById("btn-create-inner")

createBtnInner.addEventListener("click", () => {

    const parentDiv = document.getElementById("parent-div-inner")
    parentDiv.style.width = "100%"

    parentDiv.innerHTML += `
        <div class=removal-inner>
            <p class="removal-other">Mon premiere paragraph avec .innerHTML quand meme...</p>
            <p class="removal-outer">Mon deuxieme paragraph avec .innerHTML quand meme...</p>
        </div>
    `;

})

const removeBtnInner = document.getElementById("remove-button-inner")

removeBtnInner.addEventListener("click", () => {
    const lastPCreated = document.querySelectorAll(".removal-inner")
    const pToRemove = lastPCreated[lastPCreated.length - 1]
    pToRemove.remove()
})


//Exercise 4

const btnPalindrome = document.getElementById("btn-palindrome")
const btnPalindromeClear = document.getElementById("btn-palindrome-clear")
const inputPalindrome = document.getElementById("input-palindrome")
const outputPalindrome = document.getElementById("parent-div-palindrome")

btnPalindrome.addEventListener("mouseover", () => {
    btnPalindrome.style.backgroundColor = "blue"
})

btnPalindrome.addEventListener("mouseout", (event) => {
    btnPalindrome.style.backgroundColor = ""
    console.log(event)
})

btnPalindrome.addEventListener("click", (event) => {
    event.preventDefault()
    
    // Analyse the palindrome
    let split = inputPalindrome.value.split('')
    let replace = []
    split.forEach(element => {
        if (element !== ' ') {
            replace.push(element)
        }  
    })
    let joinedLower = replace.join('').toLowerCase()
    let reversedStringLower = replace.reverse().join('').toLowerCase()
    
    //Give the user their response
    const typed = document.createElement("p")
    typed.setAttribute("class", "input-to-remove")
    if (joinedLower === reversedStringLower) {
        typed.innerText = `${inputPalindrome.value} is a palindrome!`
    } else {
        typed.innerText = `${inputPalindrome.value} is not a palindrome!`
    }
    outputPalindrome.appendChild(typed)

    //Clear input
    inputPalindrome.value = ''
})

btnPalindromeClear.addEventListener("click", (event) => {
    event.preventDefault()
    const toClear = document.querySelectorAll(".input-to-remove")
    toClear.forEach(element => element.remove())
})

//Exercise 5 blanket form

const submitForm = document.getElementById('blanket-form')

submitForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let printForm = true


    //Name check
    let blanketName = document.querySelector('input[name="name"]').value
    if (blanketName.length === 0 || blanketName.length > 20) {
        printForm = false
        alert('Blanket name is required and should be less than 20 characters')
    }
    //Description check
    let blanketDescription = document.querySelector('input[name="description"]').value
    if (blanketDescription.length === 0 || blanketDescription.length > 250) {
        printForm = false
        alert('Blanket descrpition is required and should be less than 250 characters')
    } 
    //Thread count check
    let blanketThread = document.querySelector('input[name="thread-count"]').value
    if (blanketThread < 100 || blanketThread > 1000 || (blanketThread % 100) !== 0) {
        printForm = false
        alert('Thread count is required and should between 100 and 1000 and divisible by 100')
    } 

    //Gift check
    let gift = document.querySelector('input[name="gift"]:checked')
    
    if (gift == null) {
        printForm = false
        alert("Please check the box if the blanket is for yourself or a gift.")
    }

    //Color check
    let color = document.querySelector('select[name="color"]')
    if (color == null) {
        printForm = false
        alert('Please select a color')
    }
    
    //Artwork check
    let artwork = document.querySelectorAll('input[name="artwork"]:checked')
    if (artwork.length === 0) {
        printForm = false
        alert("Please choose the artwork of your blanket.")
    }

    //File check
    let file = document.querySelector('input[name="specs"]')
    let fileName = file.value
    let fileType = fileName.slice(-4)

    if (file == null) {
        printForm = false
        alert('Please upload a pdf file with the blanket specks')
    } 
    if (fileType !== '.pdf') {
        printForm = false
        alert('Please upload only pdf files')
    }

    if (printForm) {

        let secondArtworkArray = []
        artwork.forEach(element => secondArtworkArray.push(element.value))
        let artworkString = secondArtworkArray.join('and a ')
        
        const formParent = document.getElementById("parent-div-form")
       
        formParent.innerHTML += `
            <tc class="blanket">
                <td class="blanket">${blanketName}</td>
            </tc>
            <tc class="blanket">
                <td class="blanket">${blanketDescription}</td>
            </tc>
            <tc class="blanket">
                <td class="blanket">${blanketThread}</td>
            </tc>
            <tc class="blanket">
                <td class="blanket">${gift.value}</td>
            </tc>
            <tc class="blanket">
                <td class="blanket">${color.value}</td>
            </tc>
            <tc class="blanket">
                <td class="blanket">${artworkString}</td>
            </tc>
            <tc class="blanket">
                <td class="blanket">${fileName}</td>
            </tc>
        `
        formParent.appendChild(blanketSummary)
    }
})

const removeBlanket = document.getElementById("remove-blanket")

removeBlanket.addEventListener("click", (event) => {
    event.preventDefault()
    const toClear = document.querySelectorAll(".blanket")
    toClear.forEach(element => element.remove())
})

//6. Tik Tak Toe

let count = 0
let mark
let gameEnd = false
let fullSquares = document.querySelectorAll(".square")

document.getElementById("ttt-reset").addEventListener("click", (event) => {
    event.preventDefault()
    fullSquares.forEach(element => {
        element.innerText = ''
        element.style.color = ''
    })
    count = 0 
    gameEnd = false
    const winMsg = document.getElementById("winner-msg")
    if (winMsg) {winMsg.remove()}
})

document.getElementById("background").addEventListener("click", (event) => {
    event.preventDefault()

    if (event.target.className !== "square") {return} 
    if (gameEnd === true) {return}

    count%2 === 0 ? mark = "X" : mark = "O"
    if (event.target.innerText === '') {event.target.innerText = mark}

    //HAS SOMEONE WON?
    const topLeft = document.getElementById("top-left").innerText
    const topMiddle = document.getElementById("top-middle").innerText
    const topRight = document.getElementById("top-right").innerText
    const middleLeft = document.getElementById("middle-left").innerText
    const middleMiddle = document.getElementById("middle-middle").innerText
    const middleRight = document.getElementById("middle-right").innerText
    const bottomLeft = document.getElementById("bottom-left").innerText
    const bottomMiddle = document.getElementById("bottom-middle").innerText
    const bottomRight = document.getElementById("bottom-right").innerText

    if (
        topLeft === mark && topMiddle === mark && topRight === mark ||
        middleLeft === mark && middleMiddle === mark && middleRight === mark ||
        bottomLeft === mark && bottomMiddle === mark && bottomRight === mark ||
        topLeft === mark && middleLeft === mark && bottomLeft === mark ||
        topMiddle === mark && middleMiddle === mark && bottomMiddle === mark ||
        topRight === mark && middleRight === mark && bottomRight === mark ||
        topLeft === mark && middleMiddle === mark && bottomRight === mark ||
        topRight === mark && middleMiddle === mark && bottomLeft === mark
    ) {
        gameEnd = true

        fullSquares.forEach(element => {
            element.innerText === mark ? element.style.color = "red" : element.style.color = ""
        })

        const winMsg = document.createElement('h2')
        winMsg.innerText = `${mark} wins the game!\nClick the reset button to play again.`
        winMsg.id = "winner-msg"
        winMsg.style.color = "red"
        const winDiv = document.getElementById("winner-div")
        winDiv.appendChild(winMsg)   
    }

    count++
})

//7. TODO 

// maybe enhance using local storage for the toDos...

let toDoCount = 1 
const toDoList = document.getElementById('tasks')
let toDo = document.getElementById('add')
const toDoArray = []


//display todos
const displayToDo = (array) => {
    array.forEach(element => {
        let contDiv = document.createElement('div')
        contDiv.id = `${element.id}div`
        contDiv.className = "all-divs"
        contDiv.innerHTML = `
            <h4>To Do: ${element.id}</h4>
            <div class="input-label-div">
                <input class="todo-checkbox" type="checkbox" id="${element.id}checkbox" onclick="checkboxListener(event)"/>
                <label class="toDoValue" for="${element.id}label">${element.desc}</label>
                <br>  
                <button class="toDoDelete" value="${element.id}" onclick="deleteTodo(event)">Delete to do ${element.id}</button>
            </div>
            
        `
        toDoList.appendChild(contDiv)
    })
}

// clear display
const clearDisplay = () => {
    let allDivs = document.querySelectorAll(".all-divs")
    if (allDivs.length > 0) {allDivs.forEach(element => {element.remove()})}
}

//Add a to do
document.getElementById('add-btn').addEventListener('click', (event) => {
    event.preventDefault()

    clearDisplay()
    
    class toDoObject {
        constructor(desc, id, checked) {
            this.desc = desc;
            this.id = id;
            this.checked = checked;
        }
    }

    let addToDo = new toDoObject(toDo.value, toDoCount, false)

    toDoArray.push(addToDo)
    displayToDo(toDoArray)
    toDoCount++
    toDo.value = ''

})

//delete a todo
const deleteTodo = (event) => {
    event.preventDefault()
    let getBtnId = event.target.value
    let divToRemove = document.getElementById(`${getBtnId}div`)
    divToRemove.remove()
    let indexOfToDo = toDoArray.findIndex(element => (element.id === getBtnId))
    toDoArray.splice(indexOfToDo)
}

//Search
const searchElement = document.getElementById("search")

const searchFunction = (event) => {
    event.preventDefault()

    if (searchElement.value === '') {
        clearDisplay()
        displayToDo(toDoArray)
        return
    }

    clearDisplay()

    let searchArray = []
    toDoArray.filter(element => {
        let elementDesc = element.desc.toLowerCase()
        let searchValue = searchElement.value.toLowerCase()   
        if (elementDesc.includes(searchValue)) {searchArray.push(element)}
    })

    displayToDo(searchArray)
}

//checkbox
const checkboxListener = (event) => {
    event.preventDefault()
    let targetIdCheckbox = event.target.id
    let targetId = targetIdCheckbox.slice(0, (targetIdCheckbox.length - 8))
    let indexOfToDo = toDoArray.findIndex(element => {
        console.log(element.id)
        element.id === targetId
    })
    console.log(indexOfToDo)
    console.log(toDoArray[0])
    // toDoArray[indexOfToDo].checked === false ? toDoArray[indexOfToDo].checked = true : toDoArray[indexOfToDo].checked = false
    // let toDoLabel = document.getElementById(`${targetId}label`)
    // toDoLabel.style.color = "red"
    // toDoLabel.style.textDecorationLineThrough = "line-through";
}

//idcheckbox true
//idlabel red and crossed out

