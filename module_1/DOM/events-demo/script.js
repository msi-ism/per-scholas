const body = document.querySelector('body')


console.log('running script...')

// Inline Method
const reset = () => {
    console.log('Button clicked!')
}


const randNum = () => {
    console.log(Math.floor(Math.random() * 10))
}

// DOM Property Method

const btn = document.getElementById('reset-btn')
btn.onclick = reset
btn.onclick = randNum

// DOM addEventListener Method
const btn2 = document.querySelector('#reset-btn-2')
btn2.addEventListener('click', randNum)
btn2.addEventListener('click', reset)
btn2.addEventListener('click', function(){
    body.style.backgroundColor = 'purple'
    window.alert('Cool')
})