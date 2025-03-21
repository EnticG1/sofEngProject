const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

// Static signup method
userSchema.statics.signup = async function(email, password){

    // Validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    // Check if email is valid
    if(!validator.isEmail(email)){
        throw Error('Email is invalid')
    }

    // Check if password is strong enough (8 Characters min, special character, uppercase & lowercase, and number)
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    // Check if email already exists
    const exists = await this.findOne({ email })

    if(exists){
        throw Error('Email already exists')
    }

    // Encryption
    const salt = await bcrypt.genSalt(8) // Salting
    const hash = await bcrypt.hash(password, salt) // Hashing

    const user = await this.create({email, password: hash})
    return user
}

module.exports = mongoose.model('User', userSchema)