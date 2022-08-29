//ES5
// function sayHello(){
//     console.log("Hello....")
// }

// sayHello()

//ES6
// let division = (x, y) => x/y
// console.log(division(42,7))

let addFourNum = (num1, num2, num3, num4) => {
    console.log(num1 + num2 + num3 + num4)

}

addFourNum(2,4,6,8)

const greeting = function(){
    console.log("Hello Universe!")
}

greeting()


function multiplyByTen(input){
    return input * 10
}

const result = multiplyByTen() // storing the variable in 