// ^ load express framework
const express = require('express')

 // ^ Create an instance of an express app

 const app = express()

 // ^ Declare Port
 
 const PORT = 3000



 // ^ Declaring Root Route
 app.get('/greeting/:name', function(req, res){
    const {name} = req.params
    res.send(`Hey, Big-head! So good to talk to you again, ${name}!`)
 })


// ^ Declaring port
 app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
