// * Load Modules

const { request } = require('express');
const express = require('express')

const app = express()

const PORT = 3000
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];


// * Routes
app.get('/', (req, res) => {
    console.log(req.params)
    res.send('<h1>Welcome to Express Plants!</h1>')
})

app.get('/plants', (req, res) => {
    res.send('Plants route')
})


// * Route with parameter
app.get('/plants/:indexofPlantsArray', (req, res) => {
    const { indexofPlantsArray } = req.params


    // console.log(req.params.indexofPlantsArray)
    res.send(plants[req.params.indexofPlantsArray])
})

app.get('/fixed/:indexofPlantsArray', (req, res) => {
    if (plants[req.params.indexofPlantsArray]) {
        res.send(plants[req.params.indexofPlantsArray])
    } else {
        res.send(`Cannot find that index ${req.params.indexofPlantsArray}`)
    }
})

app.get('/hello/:firstname/:lastname', (req, res) => {
        console.log(req.params)
        const {firstname, lastname} = req.params
        res.send(`Hello ${firstname} ${lastname}!`)
    }
)



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

// * Query

const namesDB = ['Joe-Bob', 'Jim-Bob', 'Sue-Bob', 'Kathy-Bob', 'Micheal']

app.get('/search/:username/', (req, res) => {
    const {username} = req.params
    console.log(req.params)
    console.log(req.query)
    // const {firstname} = req.params
    // res.send(`Hello ${firstname}, ${req.query.title}`)

    for (let user of namesDB){
        if (user === username){
            return res.send(`Welcome ${username}`)
            
        } else {
            console.log('User Not Found')
        }
    }
    res.send("User not found")
})

// & http://localhost:3000/search/Micheal?location=dc&salary=100000
// & Outputs
// { username: 'Micheal' } { location: 'dc', salary: '100000' }

// app.get('/howdy/:firstname', (req, res) => {
//     console.log(req.params)
//     console.log(req.query)
//     const {firstname} = req.params
//     res.send(`Hello ${firstname}, ${req.query.title}`)
// })


// * Routes with colon (parameters) go down bottom
app.get('/:color', (req, res) => {
    res.send(req.params.color)
})
