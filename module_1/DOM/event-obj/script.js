

console.log('script is running...')

const commentBtn = document.querySelector('button')
// commentBtn.addEventListener('click', function(){
//     console.log('Clicked!')

commentBtn.addEventListener('click', function(event){
    const li = document.createElement('li')
    const input = document.querySelector('input')
    console.dir(input.value)
    li.textContent = input.value
    document.querySelector('ul').appendChild(li)

    
})

