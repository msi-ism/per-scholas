const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
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

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit