// let user = 'Micheal'

// if (user) {
//     let message = `Welcome ${user}`
//     console.log(message.toUpperCase())
// }

// let total = 0
// for (let i = 0; i < 10; i++) {
//     total += 1
// }

// console.log(total)

// const message = "Hello Universe!"

// for (let i = 0; i < message.length; i++) {
//     console.log(message[i])
// }

// for (let i = 0; i < 11; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even.`)
//     } else {
//         console.log(`${i} is odd.`)
//     }
// }

//Continue and Break
// for (let i = 0; i < 11; i++) {
//     if(i === 5){
//         continue
//     } else if (i === 8){
//         break
//     }
//     console.log(`${i} * 2 = ${i * 2}`);
// }

// const word = "Fivever"
// let reversed = ''

// if (reversed){
//     console.log('true')
// } else {
//     console.log('false')
// }

// for (let i = word.length - 1; i >= 0; i--) {
//     console.log(`${i} ${word[i]}`)
//     reversed += word[i]
// }

// console.log(reversed)



// Exercise 1
// Write a loop that outputs: 1, 3, 5, 7, 9 2, 4, 6, 8, 10.

// let even = ''
// let odd = ''

// for (let i = 1; i < 11; i++) {
//     if (i % 2 !== 0) {
//         even += (`${i}, `) 
//     }
// }
// for (let i = 1; i < 11; i++) {
//     if (i % 2 === 0) {
//         odd += (`${i}, `) 
//     }
// }

// console.log(even + odd)

// // // Exercise 2
// Write a loop that counts down from 10 to 1.
// for (let i = 10; i >= 1; i-- ) {
//     console.log(i)
// }

// // // Exercise 3
// Write a loop that outputs multiples of 3 starting at 6 and ends at 60.
// for (let i = 6; i <= 60; i+= 3) {
//     console.log(i)
// }

// // // Exercise 4
// // Using the remainder % operator, write a loop that iterates between 0 and 10 and prints all even numbers.
// for (let i = 0; i < 11; i++){
//     if (i % 2 === 0)
//     console.log(i)
// }

// Exercise 5
// Write a loop for the given output:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// let symbol = "#######"
// let newSymbol = ""
// for (let i = 0; i < symbol.length; i++){
//     newSymbol += symbol[i]
//     console.log(newSymbol)
// }

// Exercise 6
// Write a loop that prints integers in multiples of 3 as long as integers are less than 35.
// for (let i = 0; i < 35; i += 3) {
//     console.log(i)
// }

// Exercise 7
// Write a loop that prints integers in multiples of 5 as long as integers are less than 100.
// for (let i = 0; i < 100; i += 5) {
//     console.log(i)
// }

// Exercise 8
// Write a loop that prints integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output.
// for (let i = 1; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i * 3)
//     } else {
//         continue
//     }
// }

// Write your code below
// const bobsFollowers = ['Jim-Bob', 'Billy-Bob', 'Joe-Bob', 'Julie-Bob']
// const tinasFollowers = ['Jim-Bob', 'Christina', 'Julie-Bob']
// let mutualFollowers = []

// for (let i = 0; i < bobsFollowers.length; i++) {
//     // console.log(bobsFollowers[i])
//     for (let j = 0; j < tinasFollowers.length; j++) {
//         // console.log(tinasFollowers[i])
//         if (bobsFollowers[i] === tinasFollowers[j]) {
//             console.log('True')
//             mutualFollowers.push(tinasFollowers[j])
//         } else {
//             { }
//         }
//     }
// }
// console.log(mutualFollowers)


// const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
// let currentCard 


// while (currentCard !== 'spade'){
//     currentCard = cards[Math.floor(Math.random() * 4)];
//     console.log(currentCard)
// }

// let countString = '';
// let i = 0;

// do {
//   countString = countString + i;
//   i++;
// } while (i < 5);

// console.log(countString);

// let cupsOfSugarNeeded = 7
// let cupsAdded = 0

// do {
//     cupsOfSugarNeeded + 1;
//     cupsAdded++;

// } while (cupsAdded < cupsOfSugarNeeded);{
//     console.log(cupsAdded)
// }

// console.log(cupsOfSugarNeeded)

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i])
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break
    }
}

console.log("And if you don't know, now you know.")
