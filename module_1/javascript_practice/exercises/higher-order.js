// const baseFunction = num => {
//     return num * 5

// }
// console.log(baseFunction(5))

// const higherOrderFunc = param => {
//     param();
//     return `I just invoked ${param.name} as a callback function!`
//   }
   
//   const anotherFunc = () => {
//     return 'I\'m being invoked by the higher-order function!';
//   }
   
//   console.log(higherOrderFunc(anotherFunc));

const addTwo = num => {
    return num + 5;
  }
  
const checkConsistentOutput = (func, val) => {
    let checkA = val + 2
    let checkB = func(val)
    if (checkA === checkB) {
        return checkB
    } else {
        return `Inconsistent results`
    }
  
  }
  
console.log(checkConsistentOutput(addTwo, 7));
  