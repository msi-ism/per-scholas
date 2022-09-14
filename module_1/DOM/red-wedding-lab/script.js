
// Create Two Functions -> addChild and redWedding

// Attach functions to buttons

// The addChild function creates new div & appends it to the starks div

console.log("script is running...")

const addChildBtn = document.querySelector('#add-child')
const starksDiv = document.querySelector('.starks')

// ** Function input solution
// const addChild = (child) => {
//     addChildBtn.addEventListener('click', function (event) {
//         const childDiv = document.createElement('div')
//         childDiv.textContent = child
//         starksDiv.appendChild(childDiv)

//     })
// }

// addChild('Rob')

// ** Text Box Input Solution
const addChild = () => {
    addChildBtn.addEventListener('click', function (event) {
        const childDiv = document.createElement('div')
        const input = document.querySelector('input')
        childDiv.textContent = input.value
        starksDiv.appendChild(childDiv)
        document.querySelector('input').value = ''
        document.querySelector('input').focus()
        document.querySelector('input').select()

    })

}

addChild()


// ** Red Wedding Function
const redWeddingButton = document.querySelector('#red-wedding')

const redWedding = () => {
    redWeddingButton.addEventListener('click', function () {
        // for (let i = 0 ; i < starksDiv.childNodes.length - 1; i--){
        while (starksDiv.childNodes.length > 0) {
            console.log(starksDiv.childNodes.length)
            starksDiv.childNodes[0].remove()
    }
})
}

redWedding()
