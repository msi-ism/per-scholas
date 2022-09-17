console.log('script is running...')

// ** Grabbing Pad Elements
let pad1 = document.getElementById('padOne')
let pad2 = document.getElementById('padTwo')
let pad3 = document.getElementById('padThree')
let pad4 = document.getElementById('padFour')
let pad5 = document.getElementById('padFive')
let pad6 = document.getElementById('padSix')
let pad7 = document.getElementById('padSeven')
let pad8 = document.getElementById('padEight')
let pad9 = document.getElementById('padNine')

// ** Pad Array Global Variable
const padArr = [pad1, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9]

// ** Pad Light On & Off Variable
let pad1Light = '0px 0px 40px 20px #fff'
let lightOff = ''

// ** Function to Light Individual Pads
const lightPad = (pad) => {
    pad.style.boxShadow = pad1Light
}
// ** Function to UnLight Individual Pads
const offPad = (pad) => {
    pad.style.boxShadow = lightOff
}
// ** Function to Light all pads at runtime

const lightEmUp = () => {
    setTimeout(function () { lightPad(pad1); }, 500)
    setTimeout(function () { lightPad(pad2); }, 1000)
    setTimeout(function () { lightPad(pad3); }, 1500)
    setTimeout(function () { lightPad(pad4); }, 2000)
    setTimeout(function () { lightPad(pad5); }, 2500)
    setTimeout(function () { lightPad(pad6); }, 3000)
    setTimeout(function () { lightPad(pad7); }, 3500)
    setTimeout(function () { lightPad(pad8); }, 4000)
    setTimeout(function () { lightPad(pad9); }, 4500)
}

// ** Function to UnLight all pads at runtime
const  lightEmDown = () => {
    setTimeout(function () { offPad(pad1); }, 500)
    setTimeout(function () { offPad(pad2); }, 500)
    setTimeout(function () { offPad(pad3); }, 500)
    setTimeout(function () { offPad(pad4); }, 500)
    setTimeout(function () { offPad(pad5); }, 500)
    setTimeout(function () { offPad(pad6); }, 500)
    setTimeout(function () { offPad(pad7); }, 500)
    setTimeout(function () { offPad(pad8); }, 500)
    setTimeout(function () { offPad(pad9); }, 500)

}
// ** Calling LightemUP and Down Functions to Initialize Game

lightEmUp()
setTimeout(lightEmDown, 5000)


let screenText = document.querySelector('.screen')
screenText.textContent = "Sinclair says..."

// ** Game Logic Begins



// Need replay function