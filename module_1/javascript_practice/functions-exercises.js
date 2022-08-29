// Exercise 1
// function computeArea(width, height){
//     console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${(width * height)} units.`)
// }

// computeArea(10,5)

// Exercise 2

const planetHasWater = function(planet) {
    if (planet.toLowercase === 'earth' || planet.toLowercase === 'mars') {
        console.log('True')
        return true
    } else {
        console.log('False')
        return false
    }
}
planetHasWater('earth')

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

// const firstUpper = function(string) {
//     console.log(string[0].toUpperCase() + string.slice(1).toLowerCase())
// }

// firstUpper('apple')