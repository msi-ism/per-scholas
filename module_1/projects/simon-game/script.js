console.log('script is running...')

let padColors = ['red', 'orange', 'yellow', 'green', 'turquoise', 'blue', 'indigo', 'violet', 'magenta']

let pad1 = document.getElementById('padOne')
let pad2 = document.getElementById('padTwo')
let pad3 = document.getElementById('padThree')
let pad4 = document.getElementById('padFour')
let pad5 = document.getElementById('padFive')
let pad6 = document.getElementById('padSix')
let pad7 = document.getElementById('padSeven')
let pad8 = document.getElementById('padEight')
let pad9 = document.getElementById('padNine')

console.log(pad1)

const padArr = [pad1, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9]


for (let i = 0; i < padArr.length; i++) {
    padArr[i].style.backgroundColor = padColors[i]
}