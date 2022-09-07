// .forEach() will execute the same code for each element of an array.


// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// // Iterate over fruits below
// fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));

// //  When .map() is called on an array, it takes an argument of a callback function and returns a new array!

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// const secretMessage = animals.map(animal => {
//     return animal[0];
// });
// console.log(secretMessage)

// // console.log(secretMessage.join(''));

// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
//  const smallNumbers = bigNumbers.map(number => {
//     return number / 100;
//  });
// console.log(smallNumbers)

//.filter()

// const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
// const shortWords = words.filter(word => {
//   return word.length < 6;
// });
// console.log(shortWords)

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below

// const smallerNumbers = randomNumbers.filter(number => {
//     return number < 259
// })
// console.log(smallerNumbers)

// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// const longFavoriteWords = favoriteWords.filter(word => {
//     return word.length > 7
// })

// console.log(longFavoriteWords)

// .findIndex()

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(animal => {
//     return animal === 'elephant'
// })

// const startsWithS = animals.findIndex(animal => {
//     return animal[0] === 's'
// })
// console.log(startsWithS)

// .reduce()

// const numbers = [1, 2, 4, 10];
 
// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })
 
// console.log(summedNums) // Output: 17

// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);
//   return accumulator + currentValue
// }, 10)

// console.log(newSum)

//.some()

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// // Something is missing in the method call below

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// // Something is missing in the method call below

// console.log(words.some((word) => {
//   return word.length < 6;
// }));

// // Use filter to create a new array

// const interestingWords = words.filter(word => {
//   return word.length > 5
// })

// // Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => {
//   return word.length > 5
//   } 
  
// ));

// const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

// const nums = [1, 50, 75, 200, 350, 525, 1000];

// //  Choose a method that will return undefined
// cities.forEach(city => console.log('Have you visited ' + city + '?'));

// // Choose a method that will return a new array
// const longCities = cities.filter(city => { 
//   return city.length > 7
// })
// console.log(longCities)

// // Choose a method that will return a single value
// const word = cities.reduce((acc, currVal) => {
//     return acc + currVal[0]
//   }, "C");
  
//   console.log(word)

const robot = {
    model: "SAL-1000",
    mobile: true,
    sentient: false,
    armor: "Steel-plated",
    energyLevel: 75,
  };
  
  // What is missing in the following method call?
  const robotKeys = Object.keys(robot);
  
  console.log(robotKeys);
  
  // Declare robotEntries below this line:
  const robotEntries = Object.entries(robot);
  
  console.log(robotEntries);
  
  // Declare newRobot below this line:
  
  const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot, {})
  
  console.log(robot)
  console.log(newRobot);