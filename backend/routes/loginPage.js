// POST endpoint for logging in

const express = require('express')

const router = express.Router()

// !! Change to POST !! //
router.post('/', (req, res) => {
    res.json({mssg: 'POST login'})
})


module.exports = router
