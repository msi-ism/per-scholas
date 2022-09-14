//1. Create a new variable called 'total' and assign it the div with the id of 'total'

const total = document.getElementById('total')
total.textContent = 10



//2. Create Six Functions (add, subtract, multiplyBy2, divideby5, multiplyBy5, divideBy5)
// Example:
function add(){
    let totalNumber = Number(total.textContent)
    totalNumber+=1
    total.textContent = totalNumber
    console.log(totalNumber)
    window.alert(`Number added! The new value is ${totalNumber}`)
    //update the value of the total variable textContent
    // use an alert to alert the user
}
function subtract(){
    let totalNumber = Number(total.textContent)
    totalNumber-=1
    total.textContent = totalNumber
    console.log(totalNumber)
    window.alert(`Number subtracted! The new value is ${totalNumber}`)
    //update the value of the total variable textContent
    // use an alert to alert the user
}
function multiplyBy2(){
    let totalNumber = Number(total.textContent)
    totalNumber *= 2
    total.textContent = totalNumber
    console.log(totalNumber)
    window.alert(`Number multiplied by 2! The new value is ${totalNumber}`)
    //update the value of the total variable textContent
    // use an alert to alert the user
}
function divideBy2(){
    let totalNumber = Number(total.textContent)
    totalNumber/=2
    total.textContent = totalNumber
    console.log(totalNumber)
    window.alert(`Number divided by 2! The new value is ${totalNumber}`)
    //update the value of the total variable textContent
    // use an alert to alert the user
}
function multiplyBy5(){
    let totalNumber = Number(total.textContent)
    totalNumber*=5
    total.textContent = totalNumber
    console.log(totalNumber)
    window.alert(`Number multiplied by 5! The new value is ${totalNumber}`)
    //update the value of the total variable textContent
    // use an alert to alert the user
}
function divideBy5(){
    let totalNumber = Number(total.textContent)
    totalNumber/=5
    total.textContent = totalNumber
    console.log(totalNumber)
    window.alert(`Number divided by 5! The new value is ${totalNumber}`)
    //update the value of the total variable textContent
    // use an alert to alert the user
}

//3. Attach Functions to Buttons
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#subtract')
const mulBtn2 = document.querySelector('#mult-2')
const divBtn2 = document.querySelector('#div-2')
const mulBtn5 = document.querySelector('#mult-5')
const divBtn5 = document.querySelector('#div-5')

addBtn.addEventListener('click', add)
subBtn.addEventListener('click', subtract)
mulBtn2.addEventListener('click', multiplyBy2)
divBtn2.addEventListener('click', divideBy2)
mulBtn5.addEventListener('click', multiplyBy5)
divBtn5.addEventListener('click', divideBy5)