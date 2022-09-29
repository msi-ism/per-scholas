console.log(`script is running...`)

const section = document.getElementById('posts')
console.log(section)
// ** Dot Then Fetch Method

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((responseFromServer) => {
//     return responseFromServer.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => console.log(err))


fetch('https://jsonplaceholder.typicode.com/posts')
.then((responseFromServer) => responseFromServer.json())
.then(data => {
    data.forEach(post => {
        const h3 = document.createElement('h3')
        h3.textContent = post.title
        section.appendChild(h3)
    })
})
.catch(err => console.log(err))