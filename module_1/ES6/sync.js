// ** Sychronous Code Execution


const colors = ['red', 'green', 'blue']
console.log('Before the forEach...')

colors.forEach(function(color, idx){
    console.log(`${idx + 1} - ${color})`)
})

console.log(`After the forEach...`)