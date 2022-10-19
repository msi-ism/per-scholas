const express = require('express')
const morgan = require('morgan')
const fruits = require('./models/fruits')
const veggies = require('./models/veggies')
// ^ Requiring the dotenv file for server app
require('dotenv').config()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const Fruit = require('./models/FruitModel')
const Veggie = require('./models/VeggieModel')


// console.log(process.env.MONGO_URI)

const app = express()
const PORT = 3000


// ^ Middleware is a function that runs between request and response cycle
app.use(morgan('dev'))
// ^ Needed whenever setting up a new form - to read data from post request
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log('I run for all routes')
    // ^
    next() // ^ Tells Express to go to next middleware or send response 

})

// ^ App Settings - Setting app to use express view engine using jsx

app.set('view engine', 'jsx')

app.engine('jsx', require('express-react-views').createEngine())
// & Routes

// ^ Root Route: testing
app.get('/', (req, res) => {
    res.send('Welcome to Fruits!')
})


// ^ Index route: get all fruit
app.get('/fruits', (req, res) => {
    // res.send(fruits)
    Fruit.find({}, (error, fruitsFromDB) => {
        if (error) {
            console.log(error)
        }
        console.log(fruitsFromDB)
            res.render('./fruits/Index', { fruits: fruitsFromDB })
    })
})

// ^Render Fruits form
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})


// ^Render Veggies form
app.get('/veggies/new', (req, res) => {
    res.render('veggies/New')
})



// ^ Fruit Post Request
app.post('/fruits', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    Fruit.create(req.body, (error, createdFruit) => {
        if (error) {
            console.log(error)
        }
        // res.redirect('/fruits')
        console.log(createdFruit)
        res.redirect('/fruits')
    })
})


// ^ Veggie Post Request
app.post('/veggies', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    Veggie.create(req.body, (error, createdVeggie) => {

        console.log(createdVeggie)
        res.redirect('/veggies')
    })
})



// ^ Index route: get all veggies
app.get('/veggies', (req, res) => {
    // res.send(fruits)
    res.render('./veggies/Index', { veggies: veggies })
})

// ^ Show Route: show a single fruit
app.get('/fruits/:id', (req, res) => {
    const { id } = req.params
    // res.send(fruits[id])
    Fruit.findById(id, (error, foundFruit) => {
        if (error){
            console.log(error)
        }
        res.render('./fruits/Show.jsx', {// second param must be an object
            fruit: foundFruit,
            date: new Date().getFullYear()
        })
    })
})

// ^ Delete Route

app.delete('/fruits/:id', (req, res) => {
    const {id} = req.params

    // ^ Delete the fruit from Database
    Fruit.findByIdAndRemove(id, (error, data) => {
        console.log('Here', data)
        if(error){
            console.log(error)
            res.status(403).send('Bad Request')
        }
        res.redirect('/fruits')
    })
})

app.get('/fruits/:id/edit', (req, res) => {
    const {id} = req.params
    // & Find the fruit using the id
    Fruit.findById(id, (error, foundFruit) => {
        console.log(foundFruit)
        if (error) {
            console.log(error)
            res.status(403).send('Id not found')
        }
        // & render the view and pass the data from the fruit
        res.render('fruits/Edit', {fruit: foundFruit})
    })

})


app.put('/fruits/:id', (req, res) => {
    const {id} = req.params
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    Fruit.findByIdAndUpdate(id, req.body, (error, updatedFruit) => {
        if (error) {
            console.log(error)
            res.status(403).send('Cannot Update')
        }
        console.log(updatedFruit)
        res.redirect(`/fruits/${id}`)
    })
})


 // ^ Show Route: show a single veggie
app.get('/veggies/:indexOfVeggiesArray', (req, res) => {
    const { indexOfVeggiesArray } = req.params
    console.log(req.params.indexOfVeggiesArray)
    // res.send(fruits[indexOfFruitsArray])
    res.render('./veggies/Show.jsx', {// second param must be an object
        veggie: veggies[req.params.indexOfVeggiesArray],
        date: new Date().getFullYear()
    })


})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    // ^ Below is how you connect to database after connecting to server
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // ^ Below gives confirmation that database is connected
    mongoose.connection.once('open', () => {
        console.log('connected to mongo')
    })
})












// hthe quick blue fox ran as fast as he could from the back m
