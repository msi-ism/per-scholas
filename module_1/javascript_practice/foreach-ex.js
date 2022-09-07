// const exArr = [1, 2, 3, 4, 5]

// const forEach = function(num) => {
//    return (num += 2)
// }

// console.log(newArr)


// const subtractTwo = function(num) {
//     return num - 2
// }

// const recreateMap = function(array, subtractTwo) {
//     for (i = 0; i < array.length; i++) {
//         array[i] = subtractTwo(array[i])
//     }
//     return array
// }

// console.log(recreateMap([4, 5, 6, 7], subtractTwo))



// const forEachCallback = function(array, callback) {
// }

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach((letters, forEachCallback) => {
//     console.log(letters)
// //   alphabet += char;
// })


// console.log(alphabet); //prints 'abcd'
// console.log(typeof forEach); // should log: 'function'
// forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

// const subtractTwo = (num) => {
//     return num - 2
// }

// const recreateMap = (array, callback) => {
//     const newArray = []
//     for (let i = 0; i < array.length; i++) {
//         const result = callback(array[i])
//         newArray.push(result)
//     }
//     return newArray
// }

// function clean(item) {
//     console.log(`I just cleaned a ${item}`)
// }

// const nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]

// for (let i = 0; i < nails.length; i++) {
//     clean(nails[i])
// }

// =========== ForEach Challenge

// const recreateForEach = (array, callback) => {
//     // loop over the array
//     // call the callback on each of the element inside the array
// }

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];

// recreateForEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'

// const subtractTwo = function(num) {
//     return num - 2
// }

// console.log(subtractTwo(8))

// const recreateMap = (array, callback) => {
//     const newArr = []
//     for (let i = 0; i < array.length; i++) {
//         const result = callback(array[i])
//         newArr.push(result)
//     }
//     return newArr
// }
// console.log(recreateMap([4, 5, 6, 7], subtractTwo))




// // Callback For Each Function
// const recreateForEach = (array, cb) => {
//     for (let i = 0; i < array.length; i++) {
//         const result = cb(array[i])
//     }
// }

// let alphabet = ''
// const letters = ['a', 'b', 'c', 'd']

// recreateForEach(letters, function(char) {
//     alphabet += char
// })

// const recreateMap = (array, callback) => {
//     let newArr = []
//         recreateForEach(array, function(item){
//         newArr.push(callback (item))
//     })
//     return newArr
// }

// console.log(alphabet) //prints 'abcd'
// console.log(typeof recreateForEach)
// recreateForEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof recreateMap); // should log: 'function'
// console.log(recreateMap([3,4,5], n => n - 2)); // should log: [1, 2, 3]

