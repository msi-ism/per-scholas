// *** A. Q + A ****

// // *** How do we assign a value to a variable?
// let variable = 2 + 2
// const variable = 2 + 2
// // *** How do we change the value of a variable?
// let var = 2 + 2
// var = 2+ 3
// const variables can't be changed unless it's an array or object
// // *** How do we assign an existing variable to a new variable?
// variable1 = variable2
// // *** Remind me, what are declare, assign, and define?
// Declare - variable name
// Assign - equals sign
// Define - value after equals sign
// // *** What is pseudocoding and why should you do it?
// Writing out how code should work in plain english - helps to structure the logic of our programs
// // *** What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 25/75

// *** B. Strings
// // *** For all other questions that involve writing code, you can solve them via the following instructions.

// // *** Create a variable called firstVariable
// // *** Assign it the value of the string "Hello World"
// let firstVariable = 'Hello World'
// // *** Change the value of this variable to some number
// firstVariable = 8
// // *** Store the value of firstVariablein a new variable called secondVariable
// let secondVariable = firstVariable
// // *** Change the value of secondVariableto any string.
// secondVariable = 'Hello Universe'
// // *** What is the value of firstVariable?
// 8
// // *** Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// let myName = 'Micheal'
// // *** ex: Hello, my name is Jean Valjean
// let greeting = `Hello, my name is ${myName}`
// console.log(greeting)


// *** C. Booleans
// *** Using the provided variable definitions,
// *** replace the blanks so that all log statements print truein the console.
// *** Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name'=== 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a <= b && !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// // console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// *** D. The Farm
// const animal = 'cow'

// let animalCheck = animal => {
//     if (animal === 'cow') {
//         console.log(`MOOOOO`)
//     } else {
//         console.log(`Hey! You're not a cow.`)
//     }
// }
// animalCheck('sheep')

// *** E. Driver's Ed
// let age = 16

// const ageCheck = age => {
//     if (age >= 15) {
//         console.log(`Here are the keys!`)
//     } else {
//         console.log(`Sorry, you're too young.`)
//     }
// }
// ageCheck(74)

// *** Loops - A. The Basics
// 1.
// for(let i = 0; i < 11; i++) {
//     console.log(i)
// }
// // 2. 
// for(let j = 10; j <= 400; j++) {
//     console.log(j)
// }
// 3.
// for(let i = 12; i < 4000; i+=3) {
//     console.log(i)
// }

// *** - B. Get Even

// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is an even number`)
//     } else {
//         console.log(i)
//     }
// }

// *** - C. Give me Five

// for (let i = 0; i < 101; i+=5) {
//     if (i % 5 === 0 && i !== 0) {
//         console.log(`I found a ${i}. High five!`)
//     } else {

//     }
// }

// for (let i = 3; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`I found a ${i}. High Five!`)
//         console.log(`I found a ${i}. Three's a crowd.`)
//     } else if (i % 5 === 0) {
//         console.log(`I found a ${i}. High five!`)
//     } else if (i % 3 === 0) {
//         console.log(`I found a ${i}. Three's a crowd.`)
//     }
// }

// *** D. Savings Account

// bank_account = 0
// for (let i = 1; i < 101; i++) {
//     bank_account += (i * 2)
// }
// console.log(bank_account)

// *** Arrays & Control Flow

// **** A. Talk about it:
// 1. What are the things in an array called?
// elements
// 2. Do Arrays guarantee those things will be in order?
// no
// 3. What real-life thing could you model with an array?
// a list of user properties

// *** B. Easy Does It
// 1. Create an array that contains three quotes and store it in a variable called quotes
// const quotes = ['Be here now', 'The only way out is through', 'What grows flowers in the meadow, grows thorns in the bush.']

// ** C. Accessing elements
// ** Given the following array 
// const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// console.log(randomThings[0])
// Change the value of "Hello"to "World"
// randomThings[2] = "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings)

// ** D. Change Values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // What would you write to access the 3rd element of the array?
// const thirdElement = ourClass[2]
// // Change the value of "Github" to "Octocat"
// ourClass[4] = 'Octocat'
// // Add a new element, "Cloud City" to the array
// ourClass.push('Cloud City')

// console.log(ourClass)

// ** E. Mix It Up

// const myArray = [5, 10, 500, 20]

// // Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push('Aegon', 'Lion')
// // Remove the 5 from the beginning of the array.
// myArray.shift()
// // Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift('Bob Marley')
// // Remove the string of your choice from the end of the array.
// myArray.pop()
// // Reverse this array using Array.prototype.reverse(). 
// myArray.reverse()

// // Did you mutate the array?  Yes. What does mutate mean? Changing the array from it's original form
// // Did the .reverse()method return anything? Not without console log

// console.log(myArray)

// ** F. Biggie Smalls
// // Create a variable that contains an integer.
// let variable = 98
// // Write an if ... elsestatement that:
// if (variable < 100) {
//     console.log('Little Number')
// } else {
//     console.log('Big Number')
// }
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

// ** G. Monkey in the Middle
// let num = 11
// // Write an if ... else if ... elsestatement:
// // console.log()little numberif the number entered is less than 5.
// // If the number entered is more than 10, log big number.
// // Otherwise, log "monkey".
// if (num < 5) {
//     console.log('little number')
// } else if (num > 10) {
//     console.log('big number')
// } else {
//     console.log('monkey')
// }

// ** H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// // 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
// // 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(-1, 0, 'raybans')
// // 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// kristynsCloset[5] = "stained knit hat"
// console.log(kristynsCloset)
// // 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// const thomsShirt = thomsCloset[0][0]
// console.log(thomsShirt)
// // 5. In the same way, access one item from Thom's pants array.
// const thomsPants = thomsCloset[1][0]
// // 6. Access one item from Thom's accessories array.
// const thomsItem = thomsCloset[2][2]
// // 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log(`Thom is stylin' on em' with his ${thomsShirt} shirt, his ${thomsPants} pants, and his ${thomsItem} hater-blockers!`)
// // 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = "Footie Pajamas"
// console.log(thomsCloset)

// ** IV. Functions **
// ** B. printCool
// Write a function printCoolthat accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// const printCool = name => {
//     return `${name} is cool!`
// }
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

// ** C. calculateCube
// Write a function calculate Cubethat takes a single number and prints the volume of a cube made from that number.
// const calculateCube = num => {
//     return num * num * num
// }

// console.log(calculateCube(5));

// ** D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// const vowels = ['a', 'e', 'i', 'o', 'u']

// const isVowel = vowel => {
//     if (vowels.includes(vowel.toLowerCase()) === true) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isVowel("N"));

// ** E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// const getTwoLengths = (word1, word2) => {
//     console.log([word1.length, word2.length])
// }

// getTwoLengths('apple', 'jacks')

// ** F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// let newArray = []
// const getMultipleLengths = array => {
//     for (let i = 0; i < array.length; i++) {
//         newArray += array[i].length
//     }
//     console.log(newArray.split(''))
// }

// getMultipleLengths(['alpha', 'charlie', 'whisky', 'november', 'wilson'])

// ** G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// const maxOfThree = (num1, num2, num3) => {
//     if (num1 >= num2 && num1 >= num3) {
//         console.log(num1)
//     } else if (num2 >= num1 && num2 >= num3) {
//         console.log(num2)
//     } else {
//         console.log(num3)
//     }
// }

// maxOfThree(323, 1321, 8238)

// ** H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.


// let testArray = ['apple', 'passionfruit', 'peach', 'disembowlment', 'pear']
// let newArray = []
// const printLongestWord = array => {
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i].length)
//     }
//     console.log(newArray)
//     let max = Math.max(...newArray)
//     let maxWordIndex = newArray.indexOf(max)
//     // biggestWord = Math.max(newArray)
//     console.log(array[maxWordIndex])
// }
// printLongestWord(testArray)

// ** V. Objects

// user = {
//     name: 'micheal',
//     email: 'msism720@yahoo.com',
//     age: 32,
//     purchased: []
// }

// testUser = {
//     name: 'test',
//     email: 'msism720@yahoo.com',
//     age: 10,
//     purchased: []
// }


// user.email = 'msism720@gmail.com'
// user.age++
// user.location = 'Chocolate City'


// ** D. Shopaholic

// user.purchased.push('carbohydrates', 'peace of mind', 'Merino jodhpurs')
// console.log(user.purchased)

// console.log(user.purchased[2])

// ** E. Object-within-object

// user.friend = {
//     name: "grace Hopper",
//     age: 85,
//     location: 'Scuffletown, SC',
//     purchased: []
// }
// console.log(user.friend.name)
// console.log(user.friend.location)

// user.friend.age = 55
// user.friend.purchased.push('The One Ring', 'A latte')

// console.log(user.friend.purchased[1])

// ** F. Loops

// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// for (let i = 0; i < user.purchased.length; i++) {
//     console.log(user.purchased[i])
// }
// // Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
// for (let i = 0; i < user.friend.purchased.length; i++) {
//     console.log(user.friend.purchased[i])
// }

// ** G. Functions can operate on objects

// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

// const updateUser = () => {
//     user.age++
//     user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1)
// }

// updateUser()
// console.log(user)

// // Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

// const oldAndLoud = (person) => {
//     person.age++
//     person.name = person.name.charAt(0).toUpperCase() + person.name.slice(1)
//     console.log(person)
// }

// oldAndLoud(testUser)

// ** Requirements Complete! Hungry for More?
// ** Cat Combinator

// Mama Cat

// cat1 = {
//     name: 'Crisco',
//     breed: 'Housecat',
//     age: 3
// }

// console.log(cat1.age)
// console.log(cat1.breed)

// // Papa Cat

// cat2 = {
//     name: 'Frisco',
//     breed: 'Streetcat',
//     age: 5
// }

// const combineCats = (mama, papa) => {
//     console.log({name: mama.name + papa.name, age: 1, breed: mama.breed + '-' + papa.breed} )
// }

// combineCats(cat1, cat2)

// // Below  Doesn't work
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
