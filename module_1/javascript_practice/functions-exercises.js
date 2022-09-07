// Exercise 1
// function computeArea(width, height){
//     console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${(width * height)} units.`)
// }

// computeArea(10,5)

// Exercise 2

// const planetHasWater = function(planet) {
//     if (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars') {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(planetHasWater('earth'))

// Exercises L2

// const addTwo = function(num) {
//     return num + 2
// }

// addTwo(2)

// const addS = function(string) {
//     console.log(string + 's')
// }

// addS('Micheal')

// const sayHello = function(string) {
//     return (`Hi ${string}`)
// }

// const wereAwesome = function(string1, string2) {
//     console.log(`${string1} and ${string2} are awesome.`) 
// }

// wereAwesome('Micheal', 'Jim-Bob')

// const isOdd = function(num) {
//     if (num % 2 === 0) {
//         return false
//     } else {
//         return true
//     }
// }

// isOdd(7)

// Challenges

// const reverseString = function(string) {
//     console.log(string.split("").reverse().join(""))
// }

// reverseString('Micheal')

const reverseString = function(string) {
    let reversed = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
    }

console.log(reversed)
}
reverseString('Micheal')

// const firstUpper = function(string) {
//     console.log(string[0].toUpperCase() + string.slice(1).toLowerCase())
// }

// firstUpper('apple')