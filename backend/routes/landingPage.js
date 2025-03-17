// Preferably hardcode logo into the website instead of using GET method.
// Use GET method for images that might need to be changed.

const express = require('express')
const {
    createMenu, // delete later, dont need to create menu in the landing page
    getMenus,
    getMenu
} = require('../controllers/menuControllers')

const router = express.Router()

// Get all menus
router.get('/', getMenus)

// Get a single menu
router.get('/:id', getMenu)

// Test POST method
router.post('/', createMenu)

module.exports = router

// Need to finish up the routing