const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const imageSchema = new Schema({
//     img: {
//         data: Buffer,
//         type: String
//     }
// })

// Schema buat data makanan yang bakal dijual (Nama, deskripsi, harga, etc.)
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
    }
}, {timestamps: true})

// !! Masukin image tapi nanti !! //

// Model
module.exports = mongoose.model('Menu', menuSchema)