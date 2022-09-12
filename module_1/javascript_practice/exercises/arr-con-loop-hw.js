////////////////////////////////
// ** Easy Going
////////////////////////////////
// for (let i = 1; i < 21; i++) {
//     console.log(i)
// }

////////////////////////////////
// ** Get Even
////////////////////////////////
// for (let i = 0; i < 201; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     } else {

//     }
// }
////////////////////////////////
// ** Fizz Buzz
////////////////////////////////
// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("Fizzbuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// } 

////////////////////////////////
// ** Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// // 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2]++
// console.log(plantee[2])
// // 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = 'Gotham City'
// console.log(wolfy)
// // 3. Give D'Art a second hometown by adding "Hawkins"
// dart.push('Hawkins')
// console.log(dart)
// // 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy.shift()
// wolfy.unshift('Gameboy')
// console.log(wolfy)
////////////////////////////////
// ** Yell at the Ninja Turtles
////////////////////////////////
// ninjaTurts = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

// for (turt of ninjaTurts) {
//     console.log(turt.toUpperCase())
// }
////////////////////////////////
// ** Methods, Revisited
////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies.indexOf('Titanic'))
// // favMovies.sort() // puts contents in alphabetical order
// // console.log(favMovies)
// favMovies.pop()
// favMovies.push('Guardians of the Galaxy')
// // favMovies.reverse()
// favMovies.shift()
// favMovies.unshift('The Prestige')
//  // adds element to beginning of array
// console.log(favMovies.indexOf('Django Unchained'))
// favMovies.splice(3 , 1, 'Avatar')
// // console.log(favMovies)
// let halfLength = Math.floor(favMovies.length / 2)
// // Does not alter original array
// console.log(favMovies.slice(halfLength))
// console.log(favMovies)
// console.log(favMovies.indexOf('Fast and Furious')) // Outputs -1 because was not found
// // arrays declared with const can have contents changed

////////////////////////////////
// ** Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice([1][0], 1)
whereIsWaldo[1].splice(2, 1, 'No One')
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])

////////////////////////////////
// ** Excited Kitten
////////////////////////////////


////////////////////////////////
//  ** Find the Median
////////////////////////////////