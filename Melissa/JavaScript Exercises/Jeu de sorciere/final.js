let sorcierePosition = 0;
let griffonPosition = 50;
let passed = false;
console.log(`The game is starting!\n The Sorciere is at position ${sorcierePosition}\n The Griffon is at position ${griffonPosition}`)

const diceThrow = () => {
    let dice = Math.floor(Math.random() * (7 - 1) + 1) // The maximum is exclusive and the minimum is inclusive
    return dice
}

const griffonChance = () => {
    griffonPosition = sorcierePosition
    let nextMove = diceThrow()
    console.log(`The Sorciere has thrown a ${nextMove}`)
    if (nextMove <= 3) {
        sorcierePosition -= 2
        console.log(`The Sorciere rolled 3 or less and moves down the board 2 places to ${sorcierePosition}. Not good news for the Sorciere! \n The Griffon stays at position ${griffonPosition} and the Sorciere takes their turn\n`)
        sorciereThrow() 
    } else {
        console.log(`The Sorciere rolled 4 or more and gets to choose a chance card!`)
        sorciereChance()
    }         
}

const sorciereChance = () => {
    let card = diceThrow()
    if (card <= 3) {
        sorcierePosition = griffonPosition
        griffonPosition+=3
        console.log(`The Sorciere drew the Death card! \nThe Sorciere remains at the Griffon's position at ${sorcierePosition} \n The Sorciere casts a spell and the Griffon moves back up the board 3 places to position ${griffonPosition}. Not good news for the Griffon!\n The Griffon takes their turn.\n` )
        griffonThrow()
    } else {
        sorcierePosition = (griffonPosition + 1)
        passed = true
        console.log(`The Sorciere drew a Gold card and runs up the board past the Griffon by 1 place! \n The Sorciere is at position ${sorcierePosition} and the Griffon remains at position ${griffonPosition}.\n The Griffon takes their turn.\n`)
        // Potentially add an if here in case the game is won (unlikely as encounters happen in the middle of the board)
        griffonThrow()
    }
}

const sorciereThrow = async () => {
    let nextMove = diceThrow()
    sorcierePosition += nextMove
    if (sorcierePosition >= griffonPosition && passed === false) {
        console.log(`The Sorciere threw a ${nextMove} and has landed on the Griffon at position ${griffonPosition}! The Sorciere must draw a chance card!`)
        sorciereChance()
    } else if (sorcierePosition > 50) {
        console.log(`The Sorciere threw a ${nextMove} and made it past position 50! They grab the Grimoire and win the game!\nBetter luck next time Griffon!`)
    } else {
        console.log(`The Sorciere threw a ${nextMove} and moves up the board to position ${sorcierePosition}`)
        console.log(`${passed ? "The players have passed each other, it's a race to the end!\n" : "The players must still pass each other, it's anyone's game!\n"}`)
        griffonThrow()
    }     
}

const griffonThrow = () => {
    let nextMove = diceThrow()
    griffonPosition -= nextMove
    if (griffonPosition <= sorcierePosition && passed === false) {
        console.log(`The Griffon threw a ${nextMove} and has landed on the Sorciere at position ${sorcierePosition}! The Sorciere now rolls the dice to see what happens next!`)
        griffonChance()
    } else if (griffonPosition < 1) {
        console.log(`The Griffon threw a ${nextMove} and made it past position 0! They win the game!\nBetter luck next time Sorciere!`)
    } else {
        console.log(`The Griffon threw a ${nextMove}, and moves down the board to position ${griffonPosition}`)
        sorciereThrow()
    }
}

const startGame = () => {
    let firstPlayer = diceThrow()
    if (firstPlayer <= 3) {
        console.log("The Sorciere throws first!\n")
        sorciereThrow()
    } else {
        console.log("The Griffon throws first!\n")
        griffonThrow()
    }
} 

startGame()