// Preferably hardcode logo into the website instead of using GET method.
// Use GET method for images that might need to be changed.

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'GET all'})
})

module.exports = router

// Need to finish up the routing