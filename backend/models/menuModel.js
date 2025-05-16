const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
      type: String
    }
}, {timestamps: true})

// !! Masukin image tapi nanti !! //

// Model
module.exports = mongoose.model('Menu', menuSchema)