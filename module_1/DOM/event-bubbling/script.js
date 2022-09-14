console.log('script running...')

const ul = document.querySelector('ul')
const li = document.querySelector('li')
const body = document.querySelector('body')

const handleClick = () => {
    console.log(`handle click function`)
}



const createli = () => {
    const li = document.createElement('li')
    //li.addEventListener('click', () => console.log('New LI'))
    li.textContent = "I'm New"
    document.querySelector('ul').appendChild(li)
    
}


// li.addEventListener('click', function(e){
//     console.log(e)
//     console.log(e.target)
//     e.stopPropagation()
// })

const childBtn = document.querySelector('button')
const btn2 = document.querySelector('#btn-2')

ul.addEventListener('click', function(e){
    console.log(e.target)
})

childBtn.addEventListener('click', createli)

// body.addEventListener('click', function(e){
//     console.log(e.target)
// })

btn2.addEventListener('click', function(e){
    childBtn.removeEventListener('click', createli)
})