const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cartSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  request: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Cart', cartSchema)