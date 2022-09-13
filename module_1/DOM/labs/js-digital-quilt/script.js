const randColorRGB = (num = 255) => {
    return (`rgb(${Math.floor(Math.random() * num)}, ${Math.floor(Math.random() * num)}, ${Math.floor(Math.random() * num)})`)
}

console.log(randColorRGB())

const tenSquares = (num) => {
    for (let i = 0; i <= num; i++) {
    // Create ELement
        const squareDiv = document.createElement('div')
        squareDiv.className = 'square'
        squareDiv.textContent = (i)
        squareDiv.style.backgroundColor = randColorRGB()
        console.log(squareDiv)
        // Append element to the DOM
        // get element that you're going to append to
        const body = document.querySelector('body')
        console.log(body)
        body.appendChild(squareDiv)
    }
}

tenSquares(503)

// const getRandomInteger = (max) => {
//     console.log(Math.floor(Math.random() * max))
// }



