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

    //Name check
    let blanketName = document.querySelector('input[name="name"]').value
    if (blanketName.length === 0 || blanketName.length > 20) {
        alert('Blanket name is required and should be less than 20 characters')
    }
    //Description check
    let blanketDescription = document.querySelector('input[name="description"]').value
    if (blanketDescription.length === 0 || blanketDescription.length > 250) {
        alert('Blanket descrpition is required and should be less than 250 characters')
    } 
    //Thread count check
    let blanketThread = document.querySelector('input[name="thread-count"]').value
    if (blanketThread < 100 || blanketThread > 1000 || (blanketThread % 100) !== 0) {
        alert('Thread count is required and should between 100 and 1000 and divisible by 100')
    } 

    //Gift check
    let gift = document.querySelector('input[name="gift"]:checked')
    console.log(gift.value)
    if (gift == null) {
        alert("Please check the box if the blanket is for yourself or a gift.")
    }

    //Color check
    let color = document.querySelector('select[name="color"]')
    if (color == null) {
        alert('Please select a color')
    }
    
    //Artwork check
    let artwork = document.querySelectorAll('input[name="artwork"]:checked')
    if (artwork.length === 0) {
        alert("Please choose the artwork of your blanket.")
    }

    //File check
    let file = document.querySelector('input[name="specs"]')
    let fileName = file.value
    let fileType = fileName.slice(-4)

    if (file == null) {
       alert('Please upload a pdf file with the blanket specks')
    } 
    if (fileType !== '.pdf') {
        alert('Please upload only pdf files')
    }

    let secondArtworkArray = []
    artwork.forEach(element => secondArtworkArray.push(element.value))
    let artworkString = secondArtworkArray.join('and a ')
    
    const formParent = document.getElementById("parent-div-form")
    let blanketSummary = document.createElement('div')
    blanketSummary.setAttribute("class", "blanket")
    blanketSummary.innerHTML = `
        <p>Blanket name: ${blanketName}</p>
        <p>Blanket description: ${blanketDescription}</p>
        <p>Thread count: ${blanketThread}</p>
        <p>${gift.value}</p>
        <p>This blanket is ${color.value}</p>
        <p>Your blanket will be decorated with a ${artworkString}</p>
        <p>You can find the specs for the blanket in file: ${fileName}</p>
        <br>
    `
    formParent.appendChild(blanketSummary)
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
let fullSquares = document.querySelectorAll(".square")

const tTTreset = document.getElementById("ttt-reset").addEventListener("click", (event) => {
    event.preventDefault()
    fullSquares.forEach(element => {
        element.innerText = ''
        element.style.color = ''
    })
    count = 0 
    const winMsg = document.getElementById("winner-msg")
    if (winMsg) {winMsg.remove()}
})

const tikTakToeDiv = document.getElementById("background")

tikTakToeDiv.addEventListener("click", (event) => {
    event.preventDefault()
    
    if (event.target.className !== "square") {return} 
    if (count >= 99999) {return}

    count%2 === 0 ? mark = "X" : mark = "O"
    
    if (event.target.innerText === '') {
        event.target.innerText = mark 
    }

    //CHECK TO SEE IF GAME HAS FINISHED
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
        count = 99999

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





