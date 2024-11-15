// 1. Verify if a number is even or odd

// let num = 0
// let oddOrEven = num%2 
// console.log(oddOrEven === 0)

// 2. Operater d'afectation pour deduir le nombre des chassures vendus.

// let stock = 150
// stock -= 7 
// console.log(stock)

// 3. .map()

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8]
// let doubles = numberArray.map(number => number * 2)
// console.log(doubles)

// referential copying et copie par valuer: 
// linked to the storage of variables in RAM 
// primitive data types are stored in RAM directly as the value (string, number, null, undefined, boolean) 
// arrays and objects are stored as references 
// so when JS revists the ram to get the array or object it gets the reference and not the value directly. 
// in the second example when JS pushes 4 to the originalArray the reference in the memory (RAM) is changed. 
// Therefore in the second console.log when copiedArray is taken from the memory it is the reference to the originalArray that is taken (not the values directly) and [1, 2, 3, 4] is shown in the console. 

// //copy par valeur: 
// let a = 2 
// let b = a 
// console.log(b) // b = 2
// a = 15 
// console.log(b) // b = 2
// console.log(a) // a = 15

// //copy par ref: 
// let originalArray = [1, 2, 3]
// let copiedArray = originalArray
// console.log(copiedArray) // [1, 2, 3]
// originalArray.push(4)
// console.log(copiedArray) // [1, 2, 3, 4]
// console.log(originalArray) // [1, 2, 3, 4]

// let number = 1 
// let isNumber
// switch (number) {
//     case 0:
//         isNumber = "Zero"
//         break
//     case 1:
//         isNumber = "One"
//         // break (this is the break that is commented so that isNumber becomes Two)
//     case 2:
//         isNumber = "Two"
//         break
//     case 3:
//         isNumber = "Three"
//         break
// }

// console.log(isNumber) // Two
// condition in case 1 is met (number = 1) but as the break is commented in case 1 the code in case 2 is read and isNumber is defined as Two. AFter the condition is met the remaining code is read regardless of the other cases until a break is found. 

// as well as for loops there are also: 

// while loops
// let i = 0
// while (i < 5) {
//     console.log("WHILE LOOP " + i)
//     i++
// }

// // do while loops
// let indexTwo = 0 
// do {
//     console.log("DO WHILE " + indexTwo)
//     indexTwo++
// } while (indexTwo < 5)

// const commandes = ["Pizza", "Salade", "Pates", "Burger", "Dessert"]

// for (let i = 0; i < commandes.length; i++) {
//     console.log(commandes[i])
// }

const commandes = ["Pizza", "Salade", "Pates", "Burger", "Dessert"]

let index = 0
while (commandes[index] !== "Burger") {
    console.log(commandes[index])
    index++
}

// ALTERNATIVELY:
// let indexThree = 0 
// while (indexThree < commandes.length) {
//     if (commandes[indexThree] === "Burger") break
//     console.log(commandes[indexThree])
//     indexThree++
// }

// let indexTwo = 0 
// do {
// console.log(`Plat: ${commandes[indexTwo]} a ${commandes[indexTwo] === "Burger" ? 9 : 10} EURO!`)
// indexTwo++
// } while (indexTwo < commandes.length)

// functions: 

// const squared = (number) => {
//     return number * number
// }

// console.log(squared(2))


