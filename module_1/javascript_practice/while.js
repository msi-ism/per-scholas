// let i = 0 //
// while(i < 10){
// 	console.log(`while loop ${i}`)
//     i++
// }

const { ComponentPropsToStylePropsMap } = require("@aws-amplify/ui-react")

// let count = 0
// while(count <= 10){
//     console.log(`The count is: ${count}`)

//     if (count % 2 === 0){
//         console.log(`${count} is even!`);
//     }
//     count++
// }

// let newCount = 0
// let isNotDoneCounting = true

// while(isNotDoneCounting){
//     console.log(`The count is: ${newCount}`)

//     if (newCount === 10){
//         isNotDoneCounting = false
//     }
//     newCount++
// }

// let newCount = 0
// let isNotDoneCounting = true

// while(isNotDoneCounting || newCount < 10){ // will run whether either of these conditions are true
//     console.log(`The count is: ${newCount}`)

//     if (newCount === 5){
//         isNotDoneCounting = false
//     }
//     newCount++
// }

// let lives = 3
// let time = 10

// while(lives > 0 && time > 0){
//     console.log('Still playing the game')
//     console.log(`Time left ${time} and Lives left: ${lives}`)

//     if (time % 2 === 0){
//         console.log('You lose one life')
//         lives--
//     }

//     if (lives === 0) {
//         console.log('Game Over')
//         break
//     }
//     time--
// }

// let message = 'Hello Universe!'

// // for (let i = 0; i < message.length; i++){
// //     console.log(message[i])
// // }

// For of Loop
// let message = "Hello Universe"
// for (character of message){
//     console.log(character)
// }

// Do While Loop

// let i = 10
// do {
//     console.log('Do While');
//     i--
// } while (i > 0)


// Exercise One
let count = 2;
// ADD CODE HERE
while (count < 8) {
    count += 2
    console.log(count);
}


// Exercise Two
let addThis = 0
let sum = 0

while (addThis < 10) {
    sum += addThis
    addThis++
}

console.log(sum)