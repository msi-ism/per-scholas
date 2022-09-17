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
    setTimeout(function () { lightPad(pad1); }, 200)
    setTimeout(function () { lightPad(pad2); }, 300)
    setTimeout(function () { lightPad(pad3); }, 400)
    setTimeout(function () { lightPad(pad4); }, 500)
    setTimeout(function () { lightPad(pad5); }, 600)
    setTimeout(function () { lightPad(pad6); }, 700)
    setTimeout(function () { lightPad(pad7); }, 800)
    setTimeout(function () { lightPad(pad8); }, 900)
    setTimeout(function () { lightPad(pad9); }, 1000)
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
setTimeout(lightEmDown, 1000)


let screenText = document.querySelector('.screen')
screenText.textContent = "Sinclair says..."



const padTap = (pad) => {
    pad.style.boxShadow = pad1Light
    setTimeout(function () { offPad(pad); }, 250)

}
// ** Adds Tap Lighting Effect to Individual Pads
padArr.forEach(pad => { pad.addEventListener('click', function() { padTap(this); }, false)})

// ** Game Logic Begins



// Need replay function