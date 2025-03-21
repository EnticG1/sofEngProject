const User = require('../models/userModel')

// Login controller
const loginUser = async (req, res) => {
    res.json({mmssg: 'Login user'})
}

// Signup controller
const signupUser = async (req, res) => {
    res.json({mmssg: 'Signup user'})
}

module.exports = {
    loginUser,
    signupUser
}