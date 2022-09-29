// ^ load express framework
const express = require('express')

 // ^ Create an instance of an express app

 const app = express()

 // ^ Declare Port
 
 const PORT = 3000



 // ^ Declaring Routes
 app.get('/greeting/:name', function(req, res){
    const {name} = req.params
    res.send(`Hey, Big-head! So good to see you again, ${name}!`)
 })

 // ^ Tip Percentage Route
 app.get('/tip/:total/:tipPercentage', function(req, res){
    const {total, tipPercentage} = req.params
    console.log(req.params)
    const percentage = tipPercentage/100
    console.log(percentage)
    const tip = total * percentage
    console.log(tip)
    res.send(`The tip owed is ${tip}`)
 })









// ^ Declaring port
 app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
