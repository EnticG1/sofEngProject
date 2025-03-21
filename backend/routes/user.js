const express = require('express')

// Controller
const {loginUser, signupUser} = require('../controllers/userControllers')

const router = express.Router()

// Login route
router.post('/api/login', loginUser)

// Signup route
router.post('/api/signup', signupUser)

module.exports = router