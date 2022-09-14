
// ===== CHALLENGE =====
// 1. Create A Function (generate)
// Function should get a random color from the COLORS_ARRAY
// Create a li element
// Add the color name to the li text
// Set the background color of the li to the random color
// Append the li to the ul

// 2. Create Function (reset)
// Should remove all li children from the ul. 
// Should set background color to white.

console.log('script running...')

const COLORS_ARRAY = [
    "red",
    "yellow",
    "magenta",
    "cyan",
    "blue",
    "black",
    "gray",
    "teal",
    "green",
    "purple",
    "violet",
];

const ul = document.querySelector('ul')

// ** Generate Function

const generate = () => {
    let randomIndex = Math.floor(Math.random() * COLORS_ARRAY.length)
    let randomColor = COLORS_ARRAY[randomIndex]
    const li = document.createElement('li')
    li.textContent = randomColor
    li.style.backgroundColor = randomColor
    ul.appendChild(li)
    console.log(randomColor)
}

// ** Reset Function

const reset = () => {
    while (ul.children.length > 0) {
        console.log(ul.children)
        ul.children[0].remove()
    }
}

// ** Color Button
const colorBtn = document.querySelector('#generate-color')
colorBtn.addEventListener('click', generate)
// ** Reset Button
const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', reset)




