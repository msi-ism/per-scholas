const mongoose = require('mongoose')

const veggieSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    color: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        required: false
    },
    readyToEat: Boolean
    
})

const Veggie = mongoose.model('Veggie', veggieSchema)

module.exports = Veggie