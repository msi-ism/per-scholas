// const multiply = (a, b) => a * b;

// let n = multiply(5, 8);

// console.log(n);

// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello!', function() {
//   console.log('done creating file');
// });


// const firstModule = require('./first-module')
// const stringMod = require('./stringMod')


// console.log(firstModule.multiply(2, 24))

// console.log(firstModule.sum(2, 24))

// console.log(stringMod())

const daysOfWeek = require('./days-of-week.js')

const day = daysOfWeek.getWeekday(5)

console.log(day)