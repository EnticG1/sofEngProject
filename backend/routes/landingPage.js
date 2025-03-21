// Preferably hardcode logo into the website instead of using GET method.
// Use GET method for images that might need to be changed.

const express = require('express')
const {
    getMenus,
    getMenu
} = require('../controllers/menuControllers')

const router = express.Router()

// Get all menus
router.get('/menu', getMenus)

// Get a single menu
router.get('/menu/:id', getMenu)

module.exports = router

// Need to finish up the routing